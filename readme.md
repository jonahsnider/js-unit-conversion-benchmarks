# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 24 Sep 2024 02:19:59 GMT with Node.js v20.17.0 (V8 v11.3.244.8-node.23) on fv-az661-504 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `131`ns (262%)        | `141`ns (282%)                 | `7,633,588`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `150`ns (300%)        | `160`ns (320%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `221`ns (442%)        | `240`ns (480%)                 | `4,524,887`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `451`ns (902%)        | `471`ns (942%)                 | `2,217,295`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `521`ns (1,042%)      | `541`ns (1,082%)               | `1,919,386`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `612`ns (1,224%)      | `641`ns (1,282%)               | `1,633,987`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,192`ns (2,384%)    | `1,222`ns (2,444%)             | `838,926`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,175`ns (4,350%)    | `2,215`ns (4,430%)             | `459,770`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `41,695`ns (83,390%)  | `42,015`ns (84,030%)           | `23,984`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `791`ns (100%)        | `862`ns (109%)                 | `1,264,223`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `28,959`ns (3,661%)   | `30,767`ns (3,890%)            | `34,532`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `90,879`ns (11,489%)  | `91,455`ns (11,562%)           | `11,004`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `61`ns (102%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (200%)        | `121`ns (202%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (233%)        | `141`ns (235%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `201`ns (335%)        | `211`ns (352%)                 | `4,975,124`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `471`ns (785%)        | `480`ns (800%)                 | `2,123,142`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,155`ns (3,592%)    | `2,185`ns (3,642%)             | `464,037`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `21,295`ns (35,492%)  | `21,375`ns (35,625%)           | `46,959`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `110`ns (220%)        | `120`ns (240%)                 | `9,090,909`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `150`ns (300%)        | `160`ns (320%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `541`ns (1,082%)      | `571`ns (1,142%)               | `1,848,429`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,232`ns (2,464%)    | `1,253`ns (2,506%)             | `811,688`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,115`ns (6,230%)    | `3,157`ns (6,314%)             | `321,027`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `45,727`ns (91,454%)  | `46,047`ns (92,094%)           | `21,869`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `231`ns (116%)        | `240`ns (120%)                 | `4,329,004`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `261`ns (131%)        | `271`ns (136%)                 | `3,831,418`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `51`ns (102%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `91`ns (182%)         | `100`ns (200%)                 | `10,989,011`/sec      |

<!-- endblock(results) -->
