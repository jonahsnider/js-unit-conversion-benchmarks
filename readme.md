# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 01 Feb 2024 01:39:40 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az585-306 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `181`ns (100%)        | `212`ns (117%)                 | `5,524,862`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `350`ns (193%)        | `431`ns (238%)                 | `2,857,143`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `412`ns (228%)        | `512`ns (283%)                 | `2,427,184`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `551`ns (304%)        | `691`ns (382%)                 | `1,814,882`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `981`ns (542%)        | `1,183`ns (654%)               | `1,019,368`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,163`ns (643%)      | `1,524`ns (842%)               | `859,845`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,173`ns (648%)      | `1,504`ns (831%)               | `852,515`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,305`ns (1,273%)    | `2,817`ns (1,556%)             | `433,839`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,087`ns (2,258%)    | `5,063`ns (2,797%)             | `244,678`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,839`ns (4,883%)    | `9,543`ns (5,272%)             | `113,135`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `821`ns (100%)        | `892`ns (109%)                 | `1,218,027`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `32,127`ns (3,913%)   | `38,751`ns (4,720%)            | `31,126`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `39,967`ns (4,868%)   | `40,543`ns (4,938%)            | `25,021`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `221`ns (110%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `392`ns (195%)        | `442`ns (220%)                 | `2,551,020`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `472`ns (235%)        | `521`ns (259%)                 | `2,118,644`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `611`ns (304%)        | `652`ns (324%)                 | `1,636,661`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,344`ns (669%)      | `1,433`ns (713%)               | `744,048`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,352`ns (673%)      | `1,452`ns (722%)               | `739,645`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,791`ns (2,384%)    | `4,991`ns (2,483%)             | `208,725`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `212`ns (100%)        | `251`ns (118%)                 | `4,716,981`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `361`ns (170%)        | `411`ns (194%)                 | `2,770,083`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `432`ns (204%)        | `502`ns (237%)                 | `2,314,815`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,293`ns (610%)      | `1,383`ns (652%)               | `773,395`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,624`ns (766%)      | `1,794`ns (846%)               | `615,764`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,031`ns (2,845%)    | `6,215`ns (2,932%)             | `165,810`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,683`ns (3,152%)    | `6,995`ns (3,300%)             | `149,633`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `582`ns (100%)        | `661`ns (114%)                 | `1,718,213`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `602`ns (103%)        | `671`ns (115%)                 | `1,661,130`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `682`ns (117%)        | `771`ns (132%)                 | `1,466,276`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `311`ns (100%)        | `342`ns (110%)                 | `3,215,434`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `542`ns (174%)        | `601`ns (193%)                 | `1,845,018`/sec       |

<!-- endblock(results) -->
