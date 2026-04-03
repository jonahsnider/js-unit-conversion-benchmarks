# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 03 Apr 2026 16:52:50 GMT with Node.js v24.14.1 (V8 v13.6.233.17-node.44) on runnervm727z3 (Linux-x64 Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `39`ns (100%)         | `40`ns (103%)                  | `25,641,026`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `127`ns (326%)        | `157`ns (403%)                 | `7,874,016`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `127`ns (326%)        | `130`ns (333%)                 | `7,874,016`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `131`ns (336%)        | `137`ns (351%)                 | `7,633,588`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `218`ns (559%)        | `242`ns (621%)                 | `4,587,156`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `332`ns (851%)        | `337`ns (864%)                 | `3,012,048`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `520`ns (1,333%)      | `533`ns (1,367%)               | `1,923,077`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `659`ns (1,690%)      | `675`ns (1,731%)               | `1,517,451`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,068`ns (2,738%)    | `1,264`ns (3,241%)             | `936,330`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,735`ns (4,449%)    | `1,772`ns (4,544%)             | `576,369`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `403`ns (100%)        | `421`ns (104%)                 | `2,481,390`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,404`ns (348%)      | `1,503`ns (373%)               | `712,251`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `23,935`ns (5,939%)   | `24,511`ns (6,082%)            | `41,780`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `59`ns (100%)         | `60`ns (102%)                  | `16,949,153`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `117`ns (198%)        | `140`ns (237%)                 | `8,547,009`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `119`ns (202%)        | `122`ns (207%)                 | `8,403,361`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `142`ns (241%)        | `166`ns (281%)                 | `7,042,254`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `212`ns (359%)        | `230`ns (390%)                 | `4,716,981`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `663`ns (1,124%)      | `685`ns (1,161%)               | `1,508,296`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,951`ns (3,307%)    | `2,021`ns (3,425%)             | `512,558`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `41`ns (102%)                  | `25,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `115`ns (288%)        | `118`ns (295%)                 | `8,695,652`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `138`ns (345%)        | `141`ns (353%)                 | `7,246,377`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `139`ns (348%)        | `145`ns (363%)                 | `7,194,245`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `520`ns (1,300%)      | `596`ns (1,490%)               | `1,923,077`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,564`ns (3,910%)    | `1,588`ns (3,970%)             | `639,386`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,551`ns (6,378%)    | `2,633`ns (6,583%)             | `392,003`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `188`ns (100%)        | `190`ns (101%)                 | `5,319,149`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `213`ns (113%)        | `218`ns (116%)                 | `4,694,836`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `280`ns (149%)        | `283`ns (151%)                 | `3,571,429`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `44`ns (100%)         | `45`ns (102%)                  | `22,727,273`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (227%)        | `103`ns (234%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
