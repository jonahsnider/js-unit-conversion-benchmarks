# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 13 Jul 2026 20:15:42 GMT with Node.js v24.18.0 (V8 v13.6.233.17-node.50) on runnervm5mmn9 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `50`ns (125%)                  | `25,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `110`ns (275%)        | `110`ns (275%)                 | `9,090,909`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `111`ns (278%)        | `120`ns (300%)                 | `9,009,009`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `121`ns (303%)        | `130`ns (325%)                 | `8,264,463`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `220`ns (550%)        | `230`ns (575%)                 | `4,545,455`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `361`ns (903%)        | `371`ns (928%)                 | `2,770,083`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `531`ns (1,328%)      | `541`ns (1,353%)               | `1,883,239`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `651`ns (1,627%)      | `661`ns (1,652%)               | `1,536,098`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,072`ns (2,680%)    | `1,082`ns (2,705%)             | `932,836`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,794`ns (4,485%)    | `1,823`ns (4,558%)             | `557,414`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `551`ns (100%)        | `621`ns (113%)                 | `1,814,882`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,864`ns (338%)      | `2,075`ns (377%)               | `536,481`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `26,271`ns (4,768%)   | `27,583`ns (5,006%)            | `38,065`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `60`ns (100%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `111`ns (185%)        | `120`ns (200%)                 | `9,009,009`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (217%)        | `131`ns (218%)                 | `7,692,308`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `131`ns (218%)        | `140`ns (233%)                 | `7,633,588`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `220`ns (367%)        | `230`ns (383%)                 | `4,545,455`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `662`ns (1,103%)      | `672`ns (1,120%)               | `1,510,574`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,953`ns (3,255%)    | `2,004`ns (3,340%)             | `512,033`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `50`ns (125%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (300%)        | `121`ns (303%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (300%)        | `121`ns (303%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `140`ns (350%)        | `140`ns (350%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `491`ns (1,228%)      | `511`ns (1,278%)               | `2,036,660`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,533`ns (3,833%)    | `1,543`ns (3,858%)             | `652,316`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,705`ns (6,763%)    | `2,785`ns (6,963%)             | `369,686`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `210`ns (100%)        | `211`ns (100%)                 | `4,761,905`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `250`ns (119%)        | `251`ns (120%)                 | `4,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `310`ns (148%)        | `311`ns (148%)                 | `3,225,806`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `90`ns (180%)         | `91`ns (182%)                  | `11,111,111`/sec      |

<!-- endblock(results) -->
