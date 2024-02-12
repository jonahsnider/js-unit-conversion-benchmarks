# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 12 Feb 2024 06:20:15 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az1429-846 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `140`ns (117%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `330`ns (275%)        | `370`ns (308%)                 | `3,030,303`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `471`ns (393%)        | `541`ns (451%)                 | `2,123,142`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `571`ns (476%)        | `651`ns (543%)                 | `1,751,313`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,112`ns (927%)      | `1,202`ns (1,002%)             | `899,281`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,313`ns (1,094%)    | `1,463`ns (1,219%)             | `761,615`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,443`ns (1,203%)    | `1,563`ns (1,303%)             | `693,001`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,695`ns (2,246%)    | `2,875`ns (2,396%)             | `371,058`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,579`ns (3,816%)    | `4,871`ns (4,059%)             | `218,388`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `72,895`ns (60,746%)  | `73,535`ns (61,279%)           | `13,718`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `791`ns (100%)        | `992`ns (125%)                 | `1,264,223`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `32,415`ns (4,098%)   | `39,743`ns (5,024%)            | `30,850`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `84,543`ns (10,688%)  | `85,631`ns (10,826%)           | `11,828`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `150`ns (115%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `291`ns (224%)        | `341`ns (262%)                 | `3,436,426`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `381`ns (293%)        | `451`ns (347%)                 | `2,624,672`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `511`ns (393%)        | `590`ns (454%)                 | `1,956,947`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,232`ns (948%)      | `1,402`ns (1,078%)             | `811,688`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,271`ns (3,285%)    | `4,679`ns (3,599%)             | `234,137`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `36,799`ns (28,307%)  | `37,407`ns (28,775%)           | `27,175`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `140`ns (117%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `381`ns (318%)        | `431`ns (359%)                 | `2,624,672`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `441`ns (368%)        | `501`ns (418%)                 | `2,267,574`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,403`ns (1,169%)    | `1,543`ns (1,286%)             | `712,758`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,673`ns (1,394%)    | `1,884`ns (1,570%)             | `597,729`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,695`ns (5,579%)    | `7,315`ns (6,096%)             | `149,365`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `80,959`ns (67,466%)  | `81,663`ns (68,053%)           | `12,352`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `471`ns (100%)        | `531`ns (113%)                 | `2,123,142`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `511`ns (108%)        | `571`ns (121%)                 | `1,956,947`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `561`ns (119%)        | `641`ns (136%)                 | `1,782,531`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `220`ns (100%)        | `250`ns (114%)                 | `4,545,455`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `431`ns (196%)        | `491`ns (223%)                 | `2,320,186`/sec       |

<!-- endblock(results) -->
