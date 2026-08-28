# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 28 Aug 2026 02:08:36 GMT with Node.js v24.19.0 (V8 v13.6.233.17-node.51) on runnervmgx7h7 (Linux-x64 INTEL(R) XEON(R) PLATINUM 8573C)

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
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `84`ns (200%)         | `87`ns (207%)                  | `11,904,762`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `102`ns (243%)        | `108`ns (257%)                 | `9,803,922`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `112`ns (267%)        | `125`ns (298%)                 | `8,928,571`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `154`ns (367%)        | `173`ns (412%)                 | `6,493,506`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `269`ns (640%)        | `290`ns (690%)                 | `3,717,472`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `390`ns (929%)        | `411`ns (979%)                 | `2,564,103`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `509`ns (1,212%)      | `539`ns (1,283%)               | `1,964,637`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `840`ns (2,000%)      | `885`ns (2,107%)               | `1,190,476`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,368`ns (3,257%)    | `1,421`ns (3,383%)             | `730,994`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `279`ns (100%)        | `295`ns (106%)                 | `3,584,229`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `974`ns (349%)        | `1,068`ns (383%)               | `1,026,694`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `17,263`ns (6,187%)   | `18,223`ns (6,532%)            | `57,927`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `42`ns (100%)         | `44`ns (105%)                  | `23,809,524`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `97`ns (231%)         | `105`ns (250%)                 | `10,309,278`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `103`ns (245%)        | `107`ns (255%)                 | `9,708,738`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `110`ns (262%)        | `116`ns (276%)                 | `9,090,909`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `140`ns (333%)        | `156`ns (371%)                 | `7,142,857`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `540`ns (1,286%)      | `551`ns (1,312%)               | `1,851,852`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,435`ns (3,417%)    | `1,478`ns (3,519%)             | `696,864`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `42`ns (100%)         | `47`ns (112%)                  | `23,809,524`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `94`ns (224%)         | `97`ns (231%)                  | `10,638,298`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `96`ns (229%)         | `100`ns (238%)                 | `10,416,667`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `104`ns (248%)        | `113`ns (269%)                 | `9,615,385`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `398`ns (948%)        | `421`ns (1,002%)               | `2,512,563`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,338`ns (3,186%)    | `1,355`ns (3,226%)             | `747,384`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,904`ns (4,533%)    | `1,959`ns (4,664%)             | `525,210`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `141`ns (100%)        | `152`ns (108%)                 | `7,092,199`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `164`ns (116%)        | `174`ns (123%)                 | `6,097,561`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `198`ns (140%)        | `212`ns (150%)                 | `5,050,505`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `44`ns (100%)         | `46`ns (105%)                  | `22,727,273`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `84`ns (191%)         | `88`ns (200%)                  | `11,904,762`/sec      |

<!-- endblock(results) -->
