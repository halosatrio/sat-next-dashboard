import {
  Stack,
  Badge,
  HStack,
  Text,
  Flex,
  Box,
  Link,
  Button,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import { add, format, differenceInCalendarDays, isFuture } from "date-fns";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
// import DataUtils from "./DataUtils";
import CustomTooltip from "components/CustomTooltip";

import Layout from "components/Layout/index";
import { data, startDate, endDate } from "../../data/home.js";

const dateFormatter = (date) => {
  return format(new Date(date), "dd/MMM");
};

/**
 * get the dates between `startDate` and `endSate` with equal granularity
 */
const getTicks = (startDate, endDate, num) => {
  const diffDays = differenceInCalendarDays(endDate, startDate);

  let current = startDate,
    velocity = Math.round(diffDays / (num - 1));

  const ticks = [startDate.getTime()];

  for (let i = 1; i < num - 1; i++) {
    ticks.push(add(current, { days: i * velocity }).getTime());
  }

  ticks.push(endDate.getTime());
  return ticks;
};

/**
 * Add data of the date in ticks,
 * if there is no data in that date in `data`.
 *
 * @param Array<number> _ticks
 * @param {*} data
 */
const fillTicksData = (_ticks, data) => {
  const ticks = [..._ticks];
  const filled = [];
  let currentTick = ticks.shift();
  let lastData = null;
  for (const it of data) {
    if (ticks.length && it.date > currentTick && lastData) {
      filled.push({ ...lastData, ...{ date: currentTick } });
      currentTick = ticks.shift();
    } else if (ticks.length && it.date === currentTick) {
      currentTick = ticks.shift();
    }

    filled.push(it);
    lastData = it;
  }

  return filled;
};

const HomePage = () => {
  const boxHeader = css`
    width: 100%;
    text-align: center;
    padding: 1.5rem;
    border-width: 1px;
    border-radius: 8px;
    cursor: pointer;
  `;

  // Charts thingz
  const domain = [(dataMin) => dataMin, () => endDate.getTime()];
  const ticks = getTicks(startDate, endDate, 5);
  const filledData = fillTicksData(ticks, data);

  return (
    <Layout title="Overview">
      <HStack spacing={8} mb="30px" align="start">
        {boxHeaderData.map((item, idx) => (
          <Box
            key={idx}
            _hover={{ borderColor: "red.600" }}
            role="group"
            css={boxHeader}
          >
            <Text
              as="h2"
              fontSize="lg"
              color="gray.500"
              _groupHover={{ color: "red.600" }}
            >
              {item.label}
            </Text>
            <Text
              as="h3"
              fontSize="4xl"
              mt="12px"
              fontWeight="bold"
              color="red.600"
            >
              {item.value}
            </Text>
          </Box>
        ))}
      </HStack>
      <Box borderWidth="1px" borderRadius="lg" height="100%" p="1rem">
        <Text fontSize="2xl" ml="3rem">
          Today&apos;s trends
        </Text>
        <Text fontSize="xs" color="gray.500" ml="3rem">
          as of 31 October 2021, 08:00 AM
        </Text>
        <div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={filledData}
              margin={{
                top: 30,
                right: 30,
                bottom: 20,
                left: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                hasTick
                scale="time"
                tickFormatter={dateFormatter}
                type="number"
                domain={domain}
                ticks={ticks}
              />
              <YAxis tickCount={5} domain={[0, "dataMax + 5"]} width={100}>
                <Label
                  value="books borrowed"
                  angle={-90}
                  position="center"
                  id="ylabel"
                />
              </YAxis>
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey="val" stroke="#9B2C2C" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        {/* <Flex flexDirection="row">
          <Box width="70%" height="100%" p="2rem">
            <Text fontSize="xl">Today&apos;s trends</Text>
            <Text fontSize="xs" color="gray.500">
              as of 25 May 2019, 09:41 PM
            </Text>
            <LineChart
              width={730}
              height={250}
              data={data2}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </Box>
        </Flex> */}
      </Box>
    </Layout>
  );
};

export default HomePage;

const boxHeaderData = [
  { label: "Total Users", value: 60 },
  { label: "Total Books Borrowed", value: 16 },
  { label: "Overdue Books", value: 43 },
  { label: "On hold", value: 64 },
];
