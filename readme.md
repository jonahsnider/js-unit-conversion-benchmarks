# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 16 Jan 2024 14:52:28 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az1016-333 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `181`ns (100%)        | `211`ns (117%)                 | `5,524,862`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `340`ns (188%)        | `392`ns (217%)                 | `2,941,176`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `442`ns (244%)        | `541`ns (299%)                 | `2,262,443`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `642`ns (355%)        | `721`ns (398%)                 | `1,557,632`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,103`ns (609%)      | `1,234`ns (682%)               | `906,618`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,272`ns (703%)      | `1,473`ns (814%)               | `786,164`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,393`ns (770%)      | `1,563`ns (864%)               | `717,875`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,725`ns (1,506%)    | `2,977`ns (1,645%)             | `366,972`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,619`ns (2,552%)    | `5,071`ns (2,802%)             | `216,497`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,311`ns (5,144%)    | `9,591`ns (5,299%)             | `107,400`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `782`ns (100%)        | `932`ns (119%)                 | `1,278,772`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,951`ns (4,086%)   | `38,655`ns (4,943%)            | `31,298`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `40,415`ns (5,168%)   | `40,991`ns (5,242%)            | `24,743`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `191`ns (100%)        | `211`ns (110%)                 | `5,235,602`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `350`ns (183%)        | `400`ns (209%)                 | `2,857,143`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `431`ns (226%)        | `502`ns (263%)                 | `2,320,186`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `582`ns (305%)        | `652`ns (341%)                 | `1,718,213`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,234`ns (646%)      | `1,363`ns (714%)               | `810,373`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,332`ns (697%)      | `1,504`ns (787%)               | `750,751`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,551`ns (2,383%)    | `5,031`ns (2,634%)             | `219,732`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `210`ns (100%)        | `231`ns (110%)                 | `4,761,905`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `392`ns (187%)        | `431`ns (205%)                 | `2,551,020`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `491`ns (234%)        | `533`ns (254%)                 | `2,036,660`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,313`ns (625%)      | `1,393`ns (663%)               | `761,615`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,823`ns (868%)      | `1,964`ns (935%)               | `548,546`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,943`ns (2,830%)    | `6,083`ns (2,897%)             | `168,265`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,875`ns (3,274%)    | `7,103`ns (3,382%)             | `145,455`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `562`ns (100%)        | `642`ns (114%)                 | `1,779,359`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `592`ns (105%)        | `661`ns (118%)                 | `1,689,189`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `671`ns (119%)        | `762`ns (136%)                 | `1,490,313`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `320`ns (100%)        | `350`ns (109%)                 | `3,125,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `531`ns (166%)        | `591`ns (185%)                 | `1,883,239`/sec       |

<!-- endblock(results) -->
