# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 27 Nov 2026 17:14:10 GMT with Node.js v26.13.1 (V8 v14.6.202.34-node.40) on runnervm0hi8g (Linux-x64 Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `41`ns (100%)         | `42`ns (102%)                  | `24,390,244`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `127`ns (310%)        | `133`ns (324%)                 | `7,874,016`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `134`ns (327%)        | `136`ns (332%)                 | `7,462,687`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `183`ns (446%)        | `188`ns (459%)                 | `5,464,481`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `212`ns (517%)        | `218`ns (532%)                 | `4,716,981`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `369`ns (900%)        | `375`ns (915%)                 | `2,710,027`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `479`ns (1,168%)      | `499`ns (1,217%)               | `2,087,683`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `524`ns (1,278%)      | `550`ns (1,341%)               | `1,908,397`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,043`ns (2,544%)    | `1,080`ns (2,634%)             | `958,773`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,795`ns (4,378%)    | `1,823`ns (4,446%)             | `557,103`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `545`ns (100%)        | `574`ns (105%)                 | `1,834,862`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,428`ns (262%)      | `1,515`ns (278%)               | `700,280`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `21,599`ns (3,963%)   | `21,967`ns (4,031%)            | `46,298`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `63`ns (100%)         | `65`ns (103%)                  | `15,873,016`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `117`ns (186%)        | `121`ns (192%)                 | `8,547,009`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `138`ns (219%)        | `143`ns (227%)                 | `7,246,377`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `160`ns (254%)        | `165`ns (262%)                 | `6,250,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `206`ns (327%)        | `215`ns (341%)                 | `4,854,369`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `476`ns (756%)        | `493`ns (783%)                 | `2,100,840`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,926`ns (3,057%)    | `1,960`ns (3,111%)             | `519,211`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `43`ns (100%)         | `44`ns (102%)                  | `23,255,814`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `106`ns (247%)        | `109`ns (253%)                 | `9,433,962`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `132`ns (307%)        | `135`ns (314%)                 | `7,575,758`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `146`ns (340%)        | `157`ns (365%)                 | `6,849,315`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `532`ns (1,237%)      | `556`ns (1,293%)               | `1,879,699`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,125`ns (2,616%)    | `1,151`ns (2,677%)             | `888,889`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,633`ns (6,123%)    | `2,675`ns (6,221%)             | `379,795`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `228`ns (100%)        | `233`ns (102%)                 | `4,385,965`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `241`ns (106%)        | `245`ns (107%)                 | `4,149,378`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `322`ns (141%)        | `327`ns (143%)                 | `3,105,590`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `44`ns (100%)         | `45`ns (102%)                  | `22,727,273`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `124`ns (282%)        | `200`ns (455%)                 | `8,064,516`/sec       |

<!-- endblock(results) -->
