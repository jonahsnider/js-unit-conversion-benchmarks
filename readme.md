# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 26 Sep 2024 07:09:53 GMT with Node.js v20.17.0 (V8 v11.3.244.8-node.23) on fv-az651-77 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `70`ns (100%)         | `71`ns (101%)                  | `14,285,714`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (186%)        | `140`ns (200%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `141`ns (201%)        | `160`ns (229%)                 | `7,092,199`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `260`ns (371%)        | `270`ns (386%)                 | `3,846,154`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `501`ns (716%)        | `521`ns (744%)                 | `1,996,008`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `541`ns (773%)        | `561`ns (801%)                 | `1,848,429`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `601`ns (859%)        | `621`ns (887%)                 | `1,663,894`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,133`ns (1,619%)    | `1,172`ns (1,674%)             | `882,613`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,185`ns (3,121%)    | `2,225`ns (3,179%)             | `457,666`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `41,247`ns (58,924%)  | `41,471`ns (59,244%)           | `24,244`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `771`ns (100%)        | `852`ns (111%)                 | `1,297,017`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `29,199`ns (3,787%)   | `31,039`ns (4,026%)            | `34,248`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `91,135`ns (11,820%)  | `91,775`ns (11,903%)           | `10,973`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `70`ns (100%)         | `70`ns (100%)                  | `14,285,714`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (171%)        | `120`ns (171%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `130`ns (186%)        | `140`ns (200%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `201`ns (287%)        | `220`ns (314%)                 | `4,975,124`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `471`ns (673%)        | `480`ns (686%)                 | `2,123,142`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,175`ns (3,107%)    | `2,195`ns (3,136%)             | `459,770`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `21,263`ns (30,376%)  | `21,343`ns (30,490%)           | `47,030`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (240%)        | `130`ns (260%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `141`ns (282%)        | `150`ns (300%)                 | `7,092,199`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `491`ns (982%)        | `511`ns (1,022%)               | `2,036,660`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,212`ns (2,424%)    | `1,232`ns (2,464%)             | `825,083`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,175`ns (6,350%)    | `3,207`ns (6,414%)             | `314,961`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `45,631`ns (91,262%)  | `45,951`ns (91,902%)           | `21,915`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `200`ns (100%)        | `200`ns (100%)                 | `5,000,000`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `240`ns (120%)        | `241`ns (121%)                 | `4,166,667`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `270`ns (135%)        | `271`ns (136%)                 | `3,703,704`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `101`ns (202%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
