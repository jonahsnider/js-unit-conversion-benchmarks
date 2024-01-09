# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 09 Jan 2024 22:55:22 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az984-556 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `190`ns (100%)        | `212`ns (112%)                 | `5,263,158`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `321`ns (169%)        | `391`ns (206%)                 | `3,115,265`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `381`ns (201%)        | `481`ns (253%)                 | `2,624,672`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `552`ns (291%)        | `682`ns (359%)                 | `1,811,594`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,023`ns (538%)      | `1,263`ns (665%)               | `977,517`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,242`ns (654%)      | `1,582`ns (833%)               | `805,153`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,272`ns (669%)      | `1,604`ns (844%)               | `786,164`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,385`ns (1,255%)    | `2,945`ns (1,550%)             | `419,287`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,279`ns (2,252%)    | `5,083`ns (2,675%)             | `233,699`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,919`ns (4,694%)    | `9,623`ns (5,065%)             | `112,120`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `851`ns (100%)        | `973`ns (114%)                 | `1,175,088`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `32,031`ns (3,764%)   | `38,975`ns (4,580%)            | `31,220`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `39,807`ns (4,678%)   | `40,479`ns (4,757%)            | `25,121`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `190`ns (100%)        | `210`ns (111%)                 | `5,263,158`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `350`ns (184%)        | `401`ns (211%)                 | `2,857,143`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `441`ns (232%)        | `511`ns (269%)                 | `2,267,574`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `561`ns (295%)        | `641`ns (337%)                 | `1,782,531`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,242`ns (654%)      | `1,382`ns (727%)               | `805,153`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,352`ns (712%)      | `1,553`ns (817%)               | `739,645`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,459`ns (2,347%)    | `4,991`ns (2,627%)             | `224,266`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `191`ns (100%)        | `221`ns (116%)                 | `5,235,602`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `351`ns (184%)        | `400`ns (209%)                 | `2,849,003`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `422`ns (221%)        | `481`ns (252%)                 | `2,369,668`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,303`ns (682%)      | `1,404`ns (735%)               | `767,460`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,714`ns (897%)      | `1,934`ns (1,013%)             | `583,431`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,843`ns (3,059%)    | `6,075`ns (3,181%)             | `171,145`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,715`ns (3,516%)    | `7,087`ns (3,710%)             | `148,920`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `572`ns (100%)        | `642`ns (112%)                 | `1,748,252`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `601`ns (105%)        | `661`ns (116%)                 | `1,663,894`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `672`ns (117%)        | `762`ns (133%)                 | `1,488,095`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `301`ns (100%)        | `331`ns (110%)                 | `3,322,259`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `522`ns (173%)        | `572`ns (190%)                 | `1,915,709`/sec       |

<!-- endblock(results) -->
