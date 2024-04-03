# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 03 Apr 2024 00:57:25 GMT with Node.js v18.19.1 (V8 v10.2.154.26-node.28) on fv-az1426-982 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `140`ns (108%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `321`ns (247%)        | `351`ns (270%)                 | `3,115,265`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `571`ns (439%)        | `641`ns (493%)                 | `1,751,313`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `641`ns (493%)        | `741`ns (570%)                 | `1,560,062`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,132`ns (871%)      | `1,242`ns (955%)               | `883,392`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,273`ns (979%)      | `1,503`ns (1,156%)             | `785,546`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,373`ns (1,056%)    | `1,573`ns (1,210%)             | `728,332`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,725`ns (2,096%)    | `2,965`ns (2,281%)             | `366,972`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,539`ns (3,492%)    | `5,111`ns (3,932%)             | `220,313`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `72,895`ns (56,073%)  | `73,855`ns (56,812%)           | `13,718`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `911`ns (100%)        | `1,263`ns (139%)               | `1,097,695`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `36,703`ns (4,029%)   | `52,991`ns (5,817%)            | `27,246`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `83,455`ns (9,161%)   | `156,543`ns (17,184%)          | `11,983`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `131`ns (100%)        | `150`ns (115%)                 | `7,633,588`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (230%)        | `331`ns (253%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `451`ns (344%)        | `501`ns (382%)                 | `2,217,295`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `551`ns (421%)        | `601`ns (459%)                 | `1,814,882`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,262`ns (963%)      | `1,362`ns (1,040%)             | `792,393`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,679`ns (3,572%)    | `4,871`ns (3,718%)             | `213,721`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `36,991`ns (28,237%)  | `37,631`ns (28,726%)           | `27,034`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `110`ns (100%)        | `141`ns (128%)                 | `9,090,909`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `330`ns (300%)        | `421`ns (383%)                 | `3,030,303`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `360`ns (327%)        | `551`ns (501%)                 | `2,777,778`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,152`ns (1,047%)    | `1,593`ns (1,448%)             | `868,056`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,552`ns (1,411%)    | `2,305`ns (2,095%)             | `644,330`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,151`ns (5,592%)    | `8,095`ns (7,359%)             | `162,575`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `77,247`ns (70,225%)  | `80,191`ns (72,901%)           | `12,945`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `501`ns (100%)        | `561`ns (112%)                 | `1,996,008`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `531`ns (106%)        | `581`ns (116%)                 | `1,883,239`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `611`ns (122%)        | `681`ns (136%)                 | `1,636,661`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `220`ns (100%)        | `240`ns (109%)                 | `4,545,455`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `531`ns (241%)        | `591`ns (269%)                 | `1,883,239`/sec       |

<!-- endblock(results) -->
