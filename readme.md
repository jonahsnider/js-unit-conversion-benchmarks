# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 05 Sep 2024 02:14:37 GMT with Node.js v20.17.0 (V8 v11.3.244.8-node.23) on fv-az914-925 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `111`ns (222%)        | `120`ns (240%)                 | `9,009,009`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (280%)        | `160`ns (320%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `231`ns (462%)        | `250`ns (500%)                 | `4,329,004`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `411`ns (822%)        | `421`ns (842%)                 | `2,433,090`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `501`ns (1,002%)      | `511`ns (1,022%)               | `1,996,008`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `671`ns (1,342%)      | `682`ns (1,364%)               | `1,490,313`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,142`ns (2,284%)    | `1,192`ns (2,384%)             | `875,657`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,275`ns (4,550%)    | `2,315`ns (4,630%)             | `439,560`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `41,855`ns (83,710%)  | `42,143`ns (84,286%)           | `23,892`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `742`ns (100%)        | `812`ns (109%)                 | `1,347,709`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `28,895`ns (3,894%)   | `29,887`ns (4,028%)            | `34,608`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `90,559`ns (12,205%)  | `91,135`ns (12,282%)           | `11,043`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `70`ns (117%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `111`ns (185%)        | `120`ns (200%)                 | `9,009,009`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (233%)        | `150`ns (250%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `240`ns (400%)        | `250`ns (417%)                 | `4,166,667`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `481`ns (802%)        | `491`ns (818%)                 | `2,079,002`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,155`ns (3,592%)    | `2,165`ns (3,608%)             | `464,037`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `21,295`ns (35,492%)  | `21,343`ns (35,572%)           | `46,959`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `101`ns (202%)        | `110`ns (220%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `130`ns (260%)        | `140`ns (280%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `511`ns (1,022%)      | `541`ns (1,082%)               | `1,956,947`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,192`ns (2,384%)    | `1,212`ns (2,424%)             | `838,926`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,047`ns (6,094%)    | `3,077`ns (6,154%)             | `328,192`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `45,695`ns (91,390%)  | `45,951`ns (91,902%)           | `21,884`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `230`ns (115%)        | `231`ns (116%)                 | `4,347,826`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `261`ns (131%)        | `271`ns (136%)                 | `3,831,418`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `101`ns (202%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
