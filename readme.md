# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 20 Jan 2024 00:20:02 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az575-544 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `131`ns (100%)        | `221`ns (169%)                 | `7,633,588`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `231`ns (176%)        | `422`ns (322%)                 | `4,329,004`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `252`ns (192%)        | `532`ns (406%)                 | `3,968,254`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `381`ns (291%)        | `731`ns (558%)                 | `2,624,672`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `542`ns (414%)        | `1,163`ns (888%)               | `1,845,018`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `702`ns (536%)        | `1,454`ns (1,110%)             | `1,424,501`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `712`ns (544%)        | `1,543`ns (1,178%)             | `1,404,494`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,363`ns (1,040%)    | `2,867`ns (2,189%)             | `733,676`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,765`ns (2,111%)    | `5,083`ns (3,880%)             | `361,664`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,651`ns (3,550%)    | `9,695`ns (7,401%)             | `215,008`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `782`ns (100%)        | `842`ns (108%)                 | `1,278,772`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,663`ns (4,049%)   | `38,623`ns (4,939%)            | `31,583`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `40,415`ns (5,168%)   | `40,991`ns (5,242%)            | `24,743`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `221`ns (111%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `370`ns (185%)        | `412`ns (206%)                 | `2,702,703`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `502`ns (251%)        | `552`ns (276%)                 | `1,992,032`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `582`ns (291%)        | `631`ns (316%)                 | `1,718,213`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,273`ns (637%)      | `1,362`ns (681%)               | `785,546`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,352`ns (676%)      | `1,444`ns (722%)               | `739,645`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,699`ns (2,350%)    | `4,951`ns (2,476%)             | `212,811`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `191`ns (100%)        | `210`ns (110%)                 | `5,235,602`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `351`ns (184%)        | `422`ns (221%)                 | `2,849,003`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `450`ns (236%)        | `532`ns (279%)                 | `2,222,222`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,213`ns (635%)      | `1,442`ns (755%)               | `824,402`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,593`ns (834%)      | `2,065`ns (1,081%)             | `627,746`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,683`ns (2,975%)    | `6,115`ns (3,202%)             | `175,963`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,875`ns (3,076%)    | `7,095`ns (3,715%)             | `170,213`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `591`ns (100%)        | `651`ns (110%)                 | `1,692,047`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `611`ns (103%)        | `661`ns (112%)                 | `1,636,661`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `682`ns (115%)        | `751`ns (127%)                 | `1,466,276`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `311`ns (100%)        | `341`ns (110%)                 | `3,215,434`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `552`ns (177%)        | `602`ns (194%)                 | `1,811,594`/sec       |

<!-- endblock(results) -->
