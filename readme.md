# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 15 Nov 2026 02:22:01 GMT with Node.js v26.13.1 (V8 v14.6.202.34-node.40) on ip-10-0-131-116 (Linux-x64 Intel(R) Xeon(R) 6975P-C)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `46`ns (100%)         | `47`ns (102%)                  | `21,739,130`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `102`ns (222%)        | `107`ns (233%)                 | `9,803,922`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `105`ns (228%)        | `115`ns (250%)                 | `9,523,810`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `121`ns (263%)        | `126`ns (274%)                 | `8,264,463`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `151`ns (328%)        | `158`ns (343%)                 | `6,622,517`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `263`ns (572%)        | `270`ns (587%)                 | `3,802,281`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `337`ns (733%)        | `354`ns (770%)                 | `2,967,359`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `363`ns (789%)        | `372`ns (809%)                 | `2,754,821`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `721`ns (1,567%)      | `740`ns (1,609%)               | `1,386,963`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,175`ns (2,554%)    | `1,206`ns (2,622%)             | `851,064`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `318`ns (100%)        | `331`ns (104%)                 | `3,144,654`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `779`ns (245%)        | `846`ns (266%)                 | `1,283,697`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `13,463`ns (4,234%)   | `13,783`ns (4,334%)            | `74,278`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `58`ns (100%)         | `60`ns (103%)                  | `17,241,379`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `89`ns (153%)         | `106`ns (183%)                 | `11,235,955`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `102`ns (176%)        | `106`ns (183%)                 | `9,803,922`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `107`ns (184%)        | `114`ns (197%)                 | `9,345,794`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `145`ns (250%)        | `158`ns (272%)                 | `6,896,552`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `352`ns (607%)        | `364`ns (628%)                 | `2,840,909`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,195`ns (2,060%)    | `1,228`ns (2,117%)             | `836,820`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `46`ns (115%)                  | `25,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `100`ns (250%)        | `104`ns (260%)                 | `10,000,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `108`ns (270%)        | `112`ns (280%)                 | `9,259,259`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `112`ns (280%)        | `118`ns (295%)                 | `8,928,571`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `361`ns (903%)        | `383`ns (957%)                 | `2,770,083`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `879`ns (2,198%)      | `895`ns (2,238%)               | `1,137,656`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,689`ns (4,223%)    | `1,725`ns (4,313%)             | `592,066`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `117`ns (100%)        | `123`ns (105%)                 | `8,547,009`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `138`ns (118%)        | `142`ns (121%)                 | `7,246,377`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `170`ns (145%)        | `186`ns (159%)                 | `5,882,353`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `41`ns (100%)         | `48`ns (117%)                  | `24,390,244`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `73`ns (178%)         | `104`ns (254%)                 | `13,698,630`/sec      |

<!-- endblock(results) -->
