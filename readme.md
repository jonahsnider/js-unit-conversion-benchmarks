# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 15 Jan 2024 16:24:34 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az1118-88 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `180`ns (100%)        | `221`ns (123%)                 | `5,555,556`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `340`ns (189%)        | `451`ns (251%)                 | `2,941,176`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `401`ns (223%)        | `542`ns (301%)                 | `2,493,766`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `531`ns (295%)        | `681`ns (378%)                 | `1,883,239`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `913`ns (507%)        | `1,192`ns (662%)               | `1,095,290`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,083`ns (602%)      | `1,513`ns (841%)               | `923,361`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,133`ns (629%)      | `1,523`ns (846%)               | `882,613`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,367`ns (1,315%)    | `2,927`ns (1,626%)             | `422,476`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,967`ns (2,204%)    | `5,083`ns (2,824%)             | `252,080`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,703`ns (4,835%)    | `9,607`ns (5,337%)             | `114,903`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `822`ns (100%)        | `933`ns (114%)                 | `1,216,545`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,743`ns (3,862%)   | `39,135`ns (4,761%)            | `31,503`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `39,583`ns (4,815%)   | `40,191`ns (4,889%)            | `25,263`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `191`ns (100%)        | `212`ns (111%)                 | `5,235,602`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `372`ns (195%)        | `421`ns (220%)                 | `2,688,172`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `472`ns (247%)        | `512`ns (268%)                 | `2,118,644`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `601`ns (315%)        | `651`ns (341%)                 | `1,663,894`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,374`ns (719%)      | `1,464`ns (766%)               | `727,802`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,383`ns (724%)      | `1,482`ns (776%)               | `723,066`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,883`ns (2,557%)    | `5,111`ns (2,676%)             | `204,792`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `191`ns (100%)        | `222`ns (116%)                 | `5,235,602`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `342`ns (179%)        | `391`ns (205%)                 | `2,923,977`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `481`ns (252%)        | `552`ns (289%)                 | `2,079,002`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,332`ns (697%)      | `1,443`ns (755%)               | `750,751`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,714`ns (897%)      | `1,903`ns (996%)               | `583,431`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,063`ns (3,174%)    | `6,243`ns (3,269%)             | `164,935`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,635`ns (3,474%)    | `6,987`ns (3,658%)             | `150,716`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `571`ns (100%)        | `651`ns (114%)                 | `1,751,313`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `602`ns (105%)        | `681`ns (119%)                 | `1,661,130`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `672`ns (118%)        | `761`ns (133%)                 | `1,488,095`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `301`ns (100%)        | `332`ns (110%)                 | `3,322,259`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `530`ns (176%)        | `582`ns (193%)                 | `1,886,792`/sec       |

<!-- endblock(results) -->
