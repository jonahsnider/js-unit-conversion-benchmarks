# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 22 Oct 2024 06:58:50 GMT with Node.js v20.18.0 (V8 v11.3.244.8-node.23) on fv-az2026-920 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `150`ns (300%)        | `161`ns (322%)                 | `6,666,667`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `160`ns (320%)        | `170`ns (340%)                 | `6,250,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `220`ns (440%)        | `230`ns (460%)                 | `4,545,455`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `451`ns (902%)        | `471`ns (942%)                 | `2,217,295`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `511`ns (1,022%)      | `521`ns (1,042%)               | `1,956,947`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `611`ns (1,222%)      | `631`ns (1,262%)               | `1,636,661`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,142`ns (2,284%)    | `1,182`ns (2,364%)             | `875,657`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,135`ns (4,270%)    | `2,165`ns (4,330%)             | `468,384`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `34,655`ns (69,310%)  | `34,815`ns (69,630%)           | `28,856`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `641`ns (100%)        | `701`ns (109%)                 | `1,560,062`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `29,119`ns (4,543%)   | `30,015`ns (4,683%)            | `34,342`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `75,647`ns (11,801%)  | `76,095`ns (11,871%)           | `13,219`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `70`ns (117%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (200%)        | `140`ns (233%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (233%)        | `141`ns (235%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `230`ns (383%)        | `240`ns (400%)                 | `4,347,826`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `491`ns (818%)        | `501`ns (835%)                 | `2,036,660`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,195`ns (3,658%)    | `2,215`ns (3,692%)             | `455,581`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `17,647`ns (29,412%)  | `17,727`ns (29,545%)           | `56,667`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (280%)        | `150`ns (300%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `161`ns (322%)        | `170`ns (340%)                 | `6,211,180`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `521`ns (1,042%)      | `541`ns (1,082%)               | `1,919,386`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,232`ns (2,464%)    | `1,253`ns (2,506%)             | `811,688`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,087`ns (6,174%)    | `3,127`ns (6,254%)             | `323,939`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `38,015`ns (76,030%)  | `38,143`ns (76,286%)           | `26,305`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `210`ns (100%)        | `220`ns (105%)                 | `4,761,905`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `240`ns (114%)        | `241`ns (115%)                 | `4,166,667`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `281`ns (134%)        | `291`ns (139%)                 | `3,558,719`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `60`ns (120%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `130`ns (260%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
