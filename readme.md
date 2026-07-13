# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 13 Jul 2026 20:07:10 GMT with Node.js v24.18.0 (V8 v13.6.233.17-node.50) on runnervm5mmn9 (Linux-x64 INTEL(R) XEON(R) PLATINUM 8573C)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `42`ns (100%)         | `44`ns (105%)                  | `23,809,524`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `82`ns (195%)         | `102`ns (243%)                 | `12,195,122`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `93`ns (221%)         | `96`ns (229%)                  | `10,752,688`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `102`ns (243%)        | `106`ns (252%)                 | `9,803,922`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `140`ns (333%)        | `153`ns (364%)                 | `7,142,857`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `253`ns (602%)        | `261`ns (621%)                 | `3,952,569`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `354`ns (843%)        | `375`ns (893%)                 | `2,824,859`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `500`ns (1,190%)      | `516`ns (1,229%)               | `2,000,000`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `812`ns (1,933%)      | `838`ns (1,995%)               | `1,231,527`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,370`ns (3,262%)    | `1,415`ns (3,369%)             | `729,927`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `297`ns (100%)        | `314`ns (106%)                 | `3,367,003`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `903`ns (304%)        | `995`ns (335%)                 | `1,107,420`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `16,975`ns (5,715%)   | `17,695`ns (5,958%)            | `58,910`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `43`ns (108%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `103`ns (258%)        | `109`ns (273%)                 | `9,708,738`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `114`ns (285%)        | `120`ns (300%)                 | `8,771,930`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `127`ns (318%)        | `134`ns (335%)                 | `7,874,016`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `148`ns (370%)        | `160`ns (400%)                 | `6,756,757`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `517`ns (1,293%)      | `535`ns (1,338%)               | `1,934,236`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,547`ns (3,867%)    | `1,614`ns (4,035%)             | `646,412`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `41`ns (100%)         | `43`ns (105%)                  | `24,390,244`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `85`ns (207%)         | `89`ns (217%)                  | `11,764,706`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `96`ns (234%)         | `102`ns (249%)                 | `10,416,667`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `98`ns (239%)         | `104`ns (254%)                 | `10,204,082`/sec      |
| [uom](https://npmjs.com/package/uom) (fast)                        | `407`ns (993%)        | `431`ns (1,051%)               | `2,457,002`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,303`ns (3,178%)    | `1,331`ns (3,246%)             | `767,460`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,989`ns (4,851%)    | `2,037`ns (4,968%)             | `502,765`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `140`ns (100%)        | `144`ns (103%)                 | `7,142,857`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `160`ns (114%)        | `165`ns (118%)                 | `6,250,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `196`ns (140%)        | `207`ns (148%)                 | `5,102,041`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `41`ns (100%)         | `42`ns (102%)                  | `24,390,244`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `83`ns (202%)         | `87`ns (212%)                  | `12,048,193`/sec      |

<!-- endblock(results) -->
