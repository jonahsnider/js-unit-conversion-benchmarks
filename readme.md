# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 22 Nov 2024 03:36:13 GMT with Node.js v22.11.0 (V8 v12.4.254.21-node.21) on fv-az702-21 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `100`ns (200%)        | `100`ns (200%)                 | `10,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (220%)        | `111`ns (222%)                 | `9,090,909`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (240%)        | `120`ns (240%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `210`ns (420%)        | `220`ns (440%)                 | `4,761,905`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `411`ns (822%)        | `420`ns (840%)                 | `2,433,090`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `451`ns (902%)        | `452`ns (904%)                 | `2,217,295`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `561`ns (1,122%)      | `581`ns (1,162%)               | `1,782,531`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,021`ns (2,042%)    | `1,032`ns (2,064%)             | `979,432`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,994`ns (3,988%)    | `2,014`ns (4,028%)             | `501,505`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `702`ns (100%)        | `771`ns (110%)                 | `1,424,501`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,162`ns (166%)      | `1,252`ns (178%)               | `860,585`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `27,007`ns (3,847%)   | `28,879`ns (4,114%)            | `37,027`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `60`ns (100%)                  | `16,666,667`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `101`ns (168%)        | `110`ns (183%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (200%)        | `130`ns (217%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (217%)        | `130`ns (217%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `230`ns (383%)        | `231`ns (385%)                 | `4,347,826`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `471`ns (785%)        | `471`ns (785%)                 | `2,123,142`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,095`ns (3,492%)    | `2,115`ns (3,525%)             | `477,327`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (240%)        | `121`ns (242%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (240%)        | `121`ns (242%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `141`ns (282%)        | `150`ns (300%)                 | `7,092,199`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `521`ns (1,042%)      | `541`ns (1,082%)               | `1,919,386`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,122`ns (2,244%)    | `1,122`ns (2,244%)             | `891,266`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,855`ns (5,710%)    | `2,877`ns (5,754%)             | `350,263`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `190`ns (100%)        | `200`ns (105%)                 | `5,263,158`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `221`ns (116%)        | `231`ns (122%)                 | `4,524,887`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `261`ns (137%)        | `270`ns (142%)                 | `3,831,418`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `51`ns (102%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `111`ns (222%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
