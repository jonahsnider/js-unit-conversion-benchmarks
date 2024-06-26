# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 26 Jun 2024 04:04:19 GMT with Node.js v18.20.3 (V8 v10.2.154.26-node.37) on fv-az520-166 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `141`ns (118%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `321`ns (268%)        | `391`ns (326%)                 | `3,115,265`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `491`ns (409%)        | `561`ns (468%)                 | `2,036,660`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `591`ns (493%)        | `762`ns (635%)                 | `1,692,047`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,162`ns (968%)      | `1,342`ns (1,118%)             | `860,585`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,332`ns (1,110%)    | `1,854`ns (1,545%)             | `750,751`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,423`ns (1,186%)    | `1,904`ns (1,587%)             | `702,741`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,625`ns (2,188%)    | `3,067`ns (2,556%)             | `380,952`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,551`ns (3,792%)    | `5,903`ns (4,919%)             | `219,732`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `73,023`ns (60,853%)  | `75,007`ns (62,506%)           | `13,694`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `832`ns (100%)        | `1,143`ns (137%)               | `1,201,923`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `37,183`ns (4,469%)   | `53,407`ns (6,419%)            | `26,894`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `85,439`ns (10,269%)  | `158,847`ns (19,092%)          | `11,704`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `141`ns (108%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `311`ns (239%)        | `341`ns (262%)                 | `3,215,434`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `381`ns (293%)        | `431`ns (332%)                 | `2,624,672`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `501`ns (385%)        | `551`ns (424%)                 | `1,996,008`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,213`ns (933%)      | `1,342`ns (1,032%)             | `824,402`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,291`ns (3,301%)    | `4,499`ns (3,461%)             | `233,046`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `36,991`ns (28,455%)  | `37,567`ns (28,898%)           | `27,034`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `130`ns (108%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `311`ns (259%)        | `351`ns (293%)                 | `3,215,434`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `421`ns (351%)        | `501`ns (418%)                 | `2,375,297`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,272`ns (1,060%)    | `1,393`ns (1,161%)             | `786,164`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,663`ns (1,386%)    | `1,873`ns (1,561%)             | `601,323`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,183`ns (5,153%)    | `6,743`ns (5,619%)             | `161,734`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `80,639`ns (67,199%)  | `81,535`ns (67,946%)           | `12,401`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `471`ns (100%)        | `521`ns (111%)                 | `2,123,142`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `501`ns (106%)        | `551`ns (117%)                 | `1,996,008`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `621`ns (132%)        | `681`ns (145%)                 | `1,610,306`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `220`ns (100%)        | `231`ns (105%)                 | `4,545,455`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `531`ns (241%)        | `591`ns (269%)                 | `1,883,239`/sec       |

<!-- endblock(results) -->
