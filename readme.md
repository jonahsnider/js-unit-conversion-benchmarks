# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 07 Mar 2024 02:04:35 GMT with Node.js v18.19.1 (V8 v10.2.154.26-node.28) on fv-az847-780 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `130`ns (108%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `361`ns (301%)        | `401`ns (334%)                 | `2,770,083`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `471`ns (393%)        | `531`ns (443%)                 | `2,123,142`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `611`ns (509%)        | `681`ns (568%)                 | `1,636,661`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,132`ns (943%)      | `1,212`ns (1,010%)             | `883,392`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,393`ns (1,161%)    | `1,553`ns (1,294%)             | `717,875`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,422`ns (1,185%)    | `1,533`ns (1,278%)             | `703,235`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,785`ns (2,321%)    | `2,955`ns (2,463%)             | `359,066`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,731`ns (3,942%)    | `5,091`ns (4,243%)             | `211,372`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `71,807`ns (59,839%)  | `72,767`ns (60,639%)           | `13,926`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `832`ns (100%)        | `1,192`ns (143%)               | `1,201,923`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `36,735`ns (4,415%)   | `52,895`ns (6,358%)            | `27,222`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `83,839`ns (10,077%)  | `156,287`ns (18,784%)          | `11,928`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `140`ns (100%)        | `151`ns (108%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `311`ns (222%)        | `351`ns (251%)                 | `3,215,434`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `470`ns (336%)        | `541`ns (386%)                 | `2,127,660`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `511`ns (365%)        | `582`ns (416%)                 | `1,956,947`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,342`ns (959%)      | `1,533`ns (1,095%)             | `745,156`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,671`ns (3,336%)    | `5,123`ns (3,659%)             | `214,087`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `36,671`ns (26,194%)  | `37,823`ns (27,016%)           | `27,270`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `121`ns (100%)        | `140`ns (116%)                 | `8,264,463`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `350`ns (289%)        | `400`ns (331%)                 | `2,857,143`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `451`ns (373%)        | `511`ns (422%)                 | `2,217,295`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,352`ns (1,117%)    | `1,512`ns (1,250%)             | `739,645`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,693`ns (1,399%)    | `2,004`ns (1,656%)             | `590,667`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,823`ns (5,639%)    | `7,647`ns (6,320%)             | `146,563`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `79,231`ns (65,480%)  | `80,383`ns (66,432%)           | `12,621`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `470`ns (100%)        | `521`ns (111%)                 | `2,127,660`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `501`ns (107%)        | `552`ns (117%)                 | `1,996,008`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `582`ns (124%)        | `651`ns (139%)                 | `1,718,213`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `211`ns (100%)        | `230`ns (109%)                 | `4,739,336`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `511`ns (242%)        | `561`ns (266%)                 | `1,956,947`/sec       |

<!-- endblock(results) -->
