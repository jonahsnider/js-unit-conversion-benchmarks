# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 23 Jul 2024 21:13:09 GMT with Node.js v18.20.4 (V8 v10.2.154.26-node.37) on fv-az973-843 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `111`ns (100%)        | `130`ns (117%)                 | `9,009,009`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `331`ns (298%)        | `390`ns (351%)                 | `3,021,148`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `491`ns (442%)        | `561`ns (505%)                 | `2,036,660`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `581`ns (523%)        | `701`ns (632%)                 | `1,721,170`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,122`ns (1,011%)    | `1,272`ns (1,146%)             | `891,266`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,312`ns (1,182%)    | `1,583`ns (1,426%)             | `762,195`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,413`ns (1,273%)    | `1,663`ns (1,498%)             | `707,714`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,755`ns (2,482%)    | `3,067`ns (2,763%)             | `362,976`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,579`ns (4,125%)    | `5,263`ns (4,741%)             | `218,388`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `74,239`ns (66,882%)  | `75,327`ns (67,862%)           | `13,470`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `812`ns (100%)        | `1,132`ns (139%)               | `1,231,527`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `37,119`ns (4,571%)   | `52,735`ns (6,494%)            | `26,940`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `84,991`ns (10,467%)  | `160,767`ns (19,799%)          | `11,766`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `141`ns (108%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `321`ns (247%)        | `361`ns (278%)                 | `3,115,265`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `461`ns (355%)        | `521`ns (401%)                 | `2,169,197`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `561`ns (432%)        | `611`ns (470%)                 | `1,782,531`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,292`ns (994%)      | `1,402`ns (1,078%)             | `773,994`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,519`ns (3,476%)    | `4,759`ns (3,661%)             | `221,288`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `37,791`ns (29,070%)  | `38,527`ns (29,636%)           | `26,461`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `150`ns (125%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (250%)        | `371`ns (309%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `451`ns (376%)        | `531`ns (443%)                 | `2,217,295`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,313`ns (1,094%)    | `1,563`ns (1,303%)             | `761,615`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,723`ns (1,436%)    | `2,245`ns (1,871%)             | `580,383`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,375`ns (5,313%)    | `7,747`ns (6,456%)             | `156,863`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `81,407`ns (67,839%)  | `83,007`ns (69,173%)           | `12,284`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `471`ns (100%)        | `531`ns (113%)                 | `2,123,142`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `501`ns (106%)        | `551`ns (117%)                 | `1,996,008`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `611`ns (130%)        | `681`ns (145%)                 | `1,636,661`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `220`ns (100%)        | `240`ns (109%)                 | `4,545,455`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `531`ns (241%)        | `581`ns (264%)                 | `1,883,239`/sec       |

<!-- endblock(results) -->
