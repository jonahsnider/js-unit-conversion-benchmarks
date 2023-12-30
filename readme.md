# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 30 Dec 2023 03:15:33 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az985-616 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `121`ns (100%)        | `210`ns (174%)                 | `8,264,463`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `211`ns (174%)        | `391`ns (323%)                 | `4,739,336`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `240`ns (198%)        | `491`ns (406%)                 | `4,166,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `331`ns (274%)        | `641`ns (530%)                 | `3,021,148`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `522`ns (431%)        | `1,172`ns (969%)               | `1,915,709`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `663`ns (548%)        | `1,474`ns (1,218%)             | `1,508,296`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `682`ns (564%)        | `1,393`ns (1,151%)             | `1,466,276`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,353`ns (1,118%)    | `2,937`ns (2,427%)             | `739,098`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,617`ns (2,163%)    | `4,903`ns (4,052%)             | `382,117`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,431`ns (3,662%)    | `9,535`ns (7,880%)             | `225,683`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `772`ns (100%)        | `853`ns (110%)                 | `1,295,337`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,951`ns (4,139%)   | `39,039`ns (5,057%)            | `31,298`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `40,095`ns (5,194%)   | `40,735`ns (5,277%)            | `24,941`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `191`ns (100%)        | `212`ns (111%)                 | `5,235,602`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `372`ns (195%)        | `411`ns (215%)                 | `2,688,172`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `470`ns (246%)        | `511`ns (268%)                 | `2,127,660`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `582`ns (305%)        | `623`ns (326%)                 | `1,718,213`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,272`ns (666%)      | `1,353`ns (708%)               | `786,164`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,424`ns (746%)      | `1,534`ns (803%)               | `702,247`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,831`ns (2,529%)    | `5,103`ns (2,672%)             | `206,996`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `210`ns (100%)        | `231`ns (110%)                 | `4,761,905`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `382`ns (182%)        | `441`ns (210%)                 | `2,617,801`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `482`ns (230%)        | `561`ns (267%)                 | `2,074,689`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,282`ns (610%)      | `1,403`ns (668%)               | `780,031`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,784`ns (850%)      | `2,075`ns (988%)               | `560,538`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,895`ns (2,807%)    | `6,143`ns (2,925%)             | `169,635`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,423`ns (3,059%)    | `7,115`ns (3,388%)             | `155,690`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `552`ns (100%)        | `632`ns (114%)                 | `1,811,594`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `592`ns (107%)        | `663`ns (120%)                 | `1,689,189`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `671`ns (122%)        | `762`ns (138%)                 | `1,490,313`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `292`ns (100%)        | `331`ns (113%)                 | `3,424,658`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `511`ns (175%)        | `571`ns (196%)                 | `1,956,947`/sec       |

<!-- endblock(results) -->
