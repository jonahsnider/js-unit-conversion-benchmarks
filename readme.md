# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 31 May 2024 21:27:26 GMT with Node.js v18.20.3 (V8 v10.2.154.26-node.37) on fv-az1501-651 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `140`ns (108%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `331`ns (255%)        | `361`ns (278%)                 | `3,021,148`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `451`ns (347%)        | `511`ns (393%)                 | `2,217,295`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `601`ns (462%)        | `641`ns (493%)                 | `1,663,894`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,162`ns (894%)      | `1,212`ns (932%)               | `860,585`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,312`ns (1,009%)    | `1,403`ns (1,079%)             | `762,195`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,423`ns (1,095%)    | `1,502`ns (1,155%)             | `702,741`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,735`ns (2,104%)    | `2,855`ns (2,196%)             | `365,631`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,591`ns (3,532%)    | `4,759`ns (3,661%)             | `217,817`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `73,279`ns (56,368%)  | `73,727`ns (56,713%)           | `13,646`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `812`ns (100%)        | `1,082`ns (133%)               | `1,231,527`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `34,783`ns (4,284%)   | `51,583`ns (6,353%)            | `28,750`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `85,631`ns (10,546%)  | `121,087`ns (14,912%)          | `11,678`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `140`ns (100%)        | `150`ns (107%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `310`ns (221%)        | `361`ns (258%)                 | `3,225,806`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `471`ns (336%)        | `541`ns (386%)                 | `2,123,142`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `541`ns (386%)        | `671`ns (479%)                 | `1,848,429`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,323`ns (945%)      | `1,713`ns (1,224%)             | `755,858`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,611`ns (3,294%)    | `5,511`ns (3,936%)             | `216,873`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `37,439`ns (26,742%)  | `38,975`ns (27,839%)           | `26,710`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `150`ns (115%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `360`ns (277%)        | `391`ns (301%)                 | `2,777,778`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `490`ns (377%)        | `541`ns (416%)                 | `2,040,816`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,363`ns (1,048%)    | `1,443`ns (1,110%)             | `733,676`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,713`ns (1,318%)    | `1,873`ns (1,441%)             | `583,771`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,683`ns (5,141%)    | `7,135`ns (5,488%)             | `149,633`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `80,895`ns (62,227%)  | `81,407`ns (62,621%)           | `12,362`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `501`ns (100%)        | `551`ns (110%)                 | `1,996,008`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `531`ns (106%)        | `581`ns (116%)                 | `1,883,239`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `602`ns (120%)        | `682`ns (136%)                 | `1,661,130`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `231`ns (100%)        | `251`ns (109%)                 | `4,329,004`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `531`ns (230%)        | `591`ns (256%)                 | `1,883,239`/sec       |

<!-- endblock(results) -->
