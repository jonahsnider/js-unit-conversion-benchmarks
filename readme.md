# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 28 Apr 2024 15:56:46 GMT with Node.js v18.20.2 (V8 v10.2.154.26-node.36) on fv-az1536-576 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `361`ns (301%)        | `421`ns (351%)                 | `2,770,083`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `541`ns (451%)        | `621`ns (518%)                 | `1,848,429`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `611`ns (509%)        | `762`ns (635%)                 | `1,636,661`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,162`ns (968%)      | `1,322`ns (1,102%)             | `860,585`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,422`ns (1,185%)    | `1,903`ns (1,586%)             | `703,235`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,493`ns (1,244%)    | `2,125`ns (1,771%)             | `669,792`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,765`ns (2,304%)    | `3,207`ns (2,673%)             | `361,664`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,819`ns (4,016%)    | `6,111`ns (5,093%)             | `207,512`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `72,895`ns (60,746%)  | `75,391`ns (62,826%)           | `13,718`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `872`ns (100%)        | `1,152`ns (132%)               | `1,146,789`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `35,071`ns (4,022%)   | `52,799`ns (6,055%)            | `28,514`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `84,031`ns (9,637%)   | `156,415`ns (17,938%)          | `11,900`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `150`ns (115%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `280`ns (215%)        | `311`ns (239%)                 | `3,571,429`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `451`ns (347%)        | `492`ns (378%)                 | `2,217,295`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `481`ns (370%)        | `521`ns (401%)                 | `2,079,002`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,192`ns (917%)      | `1,273`ns (979%)               | `838,926`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,279`ns (3,292%)    | `4,579`ns (3,522%)             | `233,699`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `36,895`ns (28,381%)  | `37,471`ns (28,824%)           | `27,104`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `70`ns (100%)         | `130`ns (186%)                 | `14,285,714`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `201`ns (287%)        | `320`ns (457%)                 | `4,975,124`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `210`ns (300%)        | `441`ns (630%)                 | `4,761,905`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `742`ns (1,060%)      | `1,342`ns (1,917%)             | `1,347,709`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `852`ns (1,217%)      | `1,513`ns (2,161%)             | `1,173,709`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,727`ns (5,324%)    | `6,035`ns (8,621%)             | `268,312`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `43,071`ns (61,530%)  | `81,087`ns (115,839%)          | `23,217`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `491`ns (100%)        | `551`ns (112%)                 | `2,036,660`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `511`ns (104%)        | `561`ns (114%)                 | `1,956,947`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `621`ns (126%)        | `691`ns (141%)                 | `1,610,306`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `220`ns (100%)        | `231`ns (105%)                 | `4,545,455`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `521`ns (237%)        | `581`ns (264%)                 | `1,919,386`/sec       |

<!-- endblock(results) -->
