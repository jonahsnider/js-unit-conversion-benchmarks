# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 05 Mar 2024 06:34:12 GMT with Node.js v18.19.1 (V8 v10.2.154.26-node.28) on fv-az695-62 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `320`ns (246%)        | `341`ns (262%)                 | `3,125,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `461`ns (355%)        | `501`ns (385%)                 | `2,169,197`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `591`ns (455%)        | `632`ns (486%)                 | `1,692,047`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,132`ns (871%)      | `1,202`ns (925%)               | `883,392`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,313`ns (1,010%)    | `1,423`ns (1,095%)             | `761,615`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,423`ns (1,095%)    | `1,513`ns (1,164%)             | `702,741`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,637`ns (2,028%)    | `2,785`ns (2,142%)             | `379,219`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,491`ns (3,455%)    | `4,731`ns (3,639%)             | `222,668`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `72,127`ns (55,482%)  | `72,767`ns (55,975%)           | `13,864`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `891`ns (100%)        | `1,122`ns (126%)               | `1,122,334`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,903`ns (3,581%)   | `43,551`ns (4,888%)            | `31,345`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `83,775`ns (9,402%)   | `113,471`ns (12,735%)          | `11,937`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `150`ns (115%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `281`ns (216%)        | `320`ns (246%)                 | `3,558,719`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `351`ns (270%)        | `401`ns (308%)                 | `2,849,003`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `521`ns (401%)        | `571`ns (439%)                 | `1,919,386`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,212`ns (932%)      | `1,313`ns (1,010%)             | `825,083`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,351`ns (3,347%)    | `4,571`ns (3,516%)             | `229,832`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `36,479`ns (28,061%)  | `37,119`ns (28,553%)           | `27,413`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `141`ns (118%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `351`ns (293%)        | `410`ns (342%)                 | `2,849,003`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `471`ns (393%)        | `561`ns (468%)                 | `2,123,142`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,353`ns (1,128%)    | `1,533`ns (1,278%)             | `739,098`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,804`ns (1,503%)    | `2,175`ns (1,813%)             | `554,324`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,563`ns (5,469%)    | `7,435`ns (6,196%)             | `152,369`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `80,063`ns (66,719%)  | `80,895`ns (67,413%)           | `12,490`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `481`ns (100%)        | `541`ns (112%)                 | `2,079,002`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `521`ns (108%)        | `571`ns (119%)                 | `1,919,386`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `601`ns (125%)        | `671`ns (140%)                 | `1,663,894`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `220`ns (100%)        | `241`ns (110%)                 | `4,545,455`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `551`ns (250%)        | `602`ns (274%)                 | `1,814,882`/sec       |

<!-- endblock(results) -->
