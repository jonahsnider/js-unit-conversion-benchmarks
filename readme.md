# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 08 Oct 2024 00:15:49 GMT with Node.js v20.17.0 (V8 v11.3.244.8-node.23) on fv-az1498-702 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `60`ns (120%)                  | `20,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `111`ns (222%)        | `120`ns (240%)                 | `9,009,009`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (280%)        | `150`ns (300%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `231`ns (462%)        | `251`ns (502%)                 | `4,329,004`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `460`ns (920%)        | `471`ns (942%)                 | `2,173,913`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `491`ns (982%)        | `501`ns (1,002%)               | `2,036,660`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `612`ns (1,224%)      | `641`ns (1,282%)               | `1,633,987`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,132`ns (2,264%)    | `1,182`ns (2,364%)             | `883,392`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,175`ns (4,350%)    | `2,215`ns (4,430%)             | `459,770`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `41,631`ns (83,262%)  | `41,919`ns (83,838%)           | `24,021`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `742`ns (100%)        | `832`ns (112%)                 | `1,347,709`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `28,959`ns (3,903%)   | `31,183`ns (4,203%)            | `34,532`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `90,687`ns (12,222%)  | `91,327`ns (12,308%)           | `11,027`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `70`ns (100%)         | `70`ns (100%)                  | `14,285,714`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (171%)        | `121`ns (173%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `160`ns (229%)        | `170`ns (243%)                 | `6,250,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `231`ns (330%)        | `241`ns (344%)                 | `4,329,004`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `501`ns (716%)        | `501`ns (716%)                 | `1,996,008`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,165`ns (3,093%)    | `2,185`ns (3,121%)             | `461,894`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `21,343`ns (30,490%)  | `21,423`ns (30,604%)           | `46,854`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `101`ns (202%)        | `110`ns (220%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (280%)        | `151`ns (302%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `511`ns (1,022%)      | `532`ns (1,064%)               | `1,956,947`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,253`ns (2,506%)    | `1,282`ns (2,564%)             | `798,085`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,015`ns (6,030%)    | `3,045`ns (6,090%)             | `331,675`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `45,695`ns (91,390%)  | `45,951`ns (91,902%)           | `21,884`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `231`ns (116%)        | `241`ns (121%)                 | `4,329,004`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `261`ns (131%)        | `270`ns (135%)                 | `3,831,418`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `100`ns (200%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
