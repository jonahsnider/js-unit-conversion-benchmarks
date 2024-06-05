# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 05 Jun 2024 01:16:22 GMT with Node.js v18.20.3 (V8 v10.2.154.26-node.37) on fv-az1445-195 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `121`ns (100%)        | `131`ns (108%)                 | `8,264,463`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `321`ns (265%)        | `360`ns (298%)                 | `3,115,265`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `481`ns (398%)        | `541`ns (447%)                 | `2,079,002`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `581`ns (480%)        | `671`ns (555%)                 | `1,721,170`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,212`ns (1,002%)    | `1,282`ns (1,060%)             | `825,083`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,372`ns (1,134%)    | `1,553`ns (1,283%)             | `728,863`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,423`ns (1,176%)    | `1,543`ns (1,275%)             | `702,741`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,795`ns (2,310%)    | `2,977`ns (2,460%)             | `357,782`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,791`ns (3,960%)    | `5,123`ns (4,234%)             | `208,725`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `72,959`ns (60,297%)  | `73,471`ns (60,720%)           | `13,706`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `912`ns (100%)        | `1,042`ns (114%)               | `1,096,491`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `30,863`ns (3,384%)   | `38,719`ns (4,246%)            | `32,401`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `85,247`ns (9,347%)   | `86,207`ns (9,453%)            | `11,731`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `141`ns (100%)        | `160`ns (113%)                 | `7,092,199`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (213%)        | `351`ns (249%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `431`ns (306%)        | `511`ns (362%)                 | `2,320,186`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `561`ns (398%)        | `651`ns (462%)                 | `1,782,531`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,313`ns (931%)      | `1,613`ns (1,144%)             | `761,615`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,571`ns (3,242%)    | `5,283`ns (3,747%)             | `218,771`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `37,279`ns (26,439%)  | `38,271`ns (27,143%)           | `26,825`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `140`ns (108%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `371`ns (285%)        | `401`ns (308%)                 | `2,695,418`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `471`ns (362%)        | `511`ns (393%)                 | `2,123,142`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,423`ns (1,095%)    | `1,503`ns (1,156%)             | `702,741`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,743`ns (1,341%)    | `1,873`ns (1,441%)             | `573,723`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,715`ns (5,165%)    | `7,015`ns (5,396%)             | `148,920`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `81,087`ns (62,375%)  | `81,663`ns (62,818%)           | `12,332`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `481`ns (100%)        | `531`ns (110%)                 | `2,079,002`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `521`ns (108%)        | `561`ns (117%)                 | `1,919,386`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `590`ns (123%)        | `651`ns (135%)                 | `1,694,915`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `230`ns (100%)        | `241`ns (105%)                 | `4,347,826`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `531`ns (231%)        | `582`ns (253%)                 | `1,883,239`/sec       |

<!-- endblock(results) -->
