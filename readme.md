# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 15 Mar 2024 14:22:50 GMT with Node.js v18.19.1 (V8 v10.2.154.26-node.28) on fv-az973-24 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `140`ns (117%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `321`ns (268%)        | `390`ns (325%)                 | `3,115,265`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `480`ns (400%)        | `582`ns (485%)                 | `2,083,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `632`ns (527%)        | `802`ns (668%)                 | `1,582,278`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,113`ns (928%)      | `1,313`ns (1,094%)             | `898,473`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,463`ns (1,219%)    | `2,034`ns (1,695%)             | `683,527`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,513`ns (1,261%)    | `2,014`ns (1,678%)             | `660,939`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,735`ns (2,279%)    | `3,217`ns (2,681%)             | `365,631`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,879`ns (4,066%)    | `6,263`ns (5,219%)             | `204,960`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `71,743`ns (59,786%)  | `74,303`ns (61,919%)           | `13,939`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `851`ns (100%)        | `1,192`ns (140%)               | `1,175,088`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `36,191`ns (4,253%)   | `52,639`ns (6,186%)            | `27,631`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `83,583`ns (9,822%)   | `157,567`ns (18,516%)          | `11,964`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `140`ns (100%)        | `150`ns (107%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `291`ns (208%)        | `320`ns (229%)                 | `3,436,426`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `461`ns (329%)        | `511`ns (365%)                 | `2,169,197`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `521`ns (372%)        | `561`ns (401%)                 | `1,919,386`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,253`ns (895%)      | `1,352`ns (966%)               | `798,085`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,279`ns (3,056%)    | `4,439`ns (3,171%)             | `233,699`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `36,287`ns (25,919%)  | `36,863`ns (26,331%)           | `27,558`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `100`ns (100%)        | `130`ns (130%)                 | `10,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `260`ns (260%)        | `301`ns (301%)                 | `3,846,154`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `341`ns (341%)        | `441`ns (441%)                 | `2,932,551`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,142`ns (1,142%)    | `1,322`ns (1,322%)             | `875,657`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,482`ns (1,482%)    | `1,674`ns (1,674%)             | `674,764`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,135`ns (6,135%)    | `6,703`ns (6,703%)             | `162,999`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `77,119`ns (77,119%)  | `80,383`ns (80,383%)           | `12,967`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `471`ns (100%)        | `531`ns (113%)                 | `2,123,142`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `511`ns (108%)        | `552`ns (117%)                 | `1,956,947`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `581`ns (123%)        | `651`ns (138%)                 | `1,721,170`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `211`ns (100%)        | `231`ns (109%)                 | `4,739,336`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `511`ns (242%)        | `571`ns (271%)                 | `1,956,947`/sec       |

<!-- endblock(results) -->
