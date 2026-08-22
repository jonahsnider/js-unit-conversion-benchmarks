# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 22 Aug 2026 21:07:47 GMT with Node.js v24.19.0 (V8 v13.6.233.17-node.51) on runnervm76f27 (Linux-x64 INTEL(R) XEON(R) PLATINUM 8573C)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `41`ns (100%)         | `44`ns (107%)                  | `24,390,244`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `82`ns (200%)         | `86`ns (210%)                  | `12,195,122`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `97`ns (237%)         | `104`ns (254%)                 | `10,309,278`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `107`ns (261%)        | `111`ns (271%)                 | `9,345,794`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `139`ns (339%)        | `156`ns (380%)                 | `7,194,245`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `268`ns (654%)        | `285`ns (695%)                 | `3,731,343`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `357`ns (871%)        | `380`ns (927%)                 | `2,801,120`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `520`ns (1,268%)      | `540`ns (1,317%)               | `1,923,077`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `844`ns (2,059%)      | `877`ns (2,139%)               | `1,184,834`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,253`ns (3,056%)    | `1,320`ns (3,220%)             | `798,085`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `281`ns (100%)        | `299`ns (106%)                 | `3,558,719`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,054`ns (375%)      | `1,150`ns (409%)               | `948,767`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `17,119`ns (6,092%)   | `17,935`ns (6,383%)            | `58,415`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `41`ns (100%)         | `44`ns (107%)                  | `24,390,244`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `89`ns (217%)         | `93`ns (227%)                  | `11,235,955`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `94`ns (229%)         | `104`ns (254%)                 | `10,638,298`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `102`ns (249%)        | `109`ns (266%)                 | `9,803,922`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `141`ns (344%)        | `160`ns (390%)                 | `7,092,199`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `516`ns (1,259%)      | `533`ns (1,300%)               | `1,937,984`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,362`ns (3,322%)    | `1,420`ns (3,463%)             | `734,214`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `41`ns (100%)         | `45`ns (110%)                  | `24,390,244`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `88`ns (215%)         | `95`ns (232%)                  | `11,363,636`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `102`ns (249%)        | `123`ns (300%)                 | `9,803,922`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `108`ns (263%)        | `114`ns (278%)                 | `9,259,259`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `410`ns (1,000%)      | `435`ns (1,061%)               | `2,439,024`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,313`ns (3,202%)    | `1,367`ns (3,334%)             | `761,615`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,880`ns (4,585%)    | `1,950`ns (4,756%)             | `531,915`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `140`ns (100%)        | `150`ns (107%)                 | `7,142,857`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `157`ns (112%)        | `163`ns (116%)                 | `6,369,427`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `200`ns (143%)        | `215`ns (154%)                 | `5,000,000`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `43`ns (100%)         | `46`ns (107%)                  | `23,255,814`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `84`ns (195%)         | `91`ns (212%)                  | `11,904,762`/sec      |

<!-- endblock(results) -->
