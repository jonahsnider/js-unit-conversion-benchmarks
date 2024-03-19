# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 19 Mar 2024 19:02:18 GMT with Node.js v18.19.1 (V8 v10.2.154.26-node.28) on fv-az1382-873 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `131`ns (109%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `321`ns (268%)        | `360`ns (300%)                 | `3,115,265`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `450`ns (375%)        | `511`ns (426%)                 | `2,222,222`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `561`ns (468%)        | `641`ns (534%)                 | `1,782,531`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,092`ns (910%)      | `1,192`ns (993%)               | `915,751`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,242`ns (1,035%)    | `1,413`ns (1,178%)             | `805,153`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,373`ns (1,144%)    | `1,503`ns (1,253%)             | `728,332`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,645`ns (2,204%)    | `2,835`ns (2,363%)             | `378,072`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,479`ns (3,733%)    | `4,823`ns (4,019%)             | `223,264`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `72,191`ns (60,159%)  | `73,087`ns (60,906%)           | `13,852`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `881`ns (100%)        | `1,222`ns (139%)               | `1,135,074`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `36,415`ns (4,133%)   | `52,479`ns (5,957%)            | `27,461`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `83,391`ns (9,465%)   | `155,647`ns (17,667%)          | `11,992`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `141`ns (100%)        | `160`ns (113%)                 | `7,092,199`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `291`ns (206%)        | `321`ns (228%)                 | `3,436,426`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `451`ns (320%)        | `500`ns (355%)                 | `2,217,295`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `541`ns (384%)        | `581`ns (412%)                 | `1,848,429`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,243`ns (882%)      | `1,342`ns (952%)               | `804,505`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,599`ns (3,262%)    | `4,799`ns (3,404%)             | `217,439`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `36,799`ns (26,099%)  | `37,407`ns (26,530%)           | `27,175`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `150`ns (125%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `351`ns (293%)        | `420`ns (350%)                 | `2,849,003`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `471`ns (393%)        | `631`ns (526%)                 | `2,123,142`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,313`ns (1,094%)    | `1,653`ns (1,378%)             | `761,615`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,723`ns (1,436%)    | `2,515`ns (2,096%)             | `580,383`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,315`ns (5,263%)    | `8,439`ns (7,033%)             | `158,353`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `78,591`ns (65,492%)  | `80,959`ns (67,466%)           | `12,724`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `471`ns (100%)        | `532`ns (113%)                 | `2,123,142`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `521`ns (111%)        | `571`ns (121%)                 | `1,919,386`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `581`ns (123%)        | `661`ns (140%)                 | `1,721,170`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `211`ns (100%)        | `230`ns (109%)                 | `4,739,336`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `521`ns (247%)        | `581`ns (275%)                 | `1,919,386`/sec       |

<!-- endblock(results) -->
