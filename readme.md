# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 07 May 2025 02:50:43 GMT with Node.js v22.15.0 (V8 v12.4.254.21-node.24) on fv-az1922-178 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `110`ns (220%)        | `110`ns (220%)                 | `9,090,909`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `131`ns (262%)        | `141`ns (282%)                 | `7,633,588`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (280%)        | `141`ns (282%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `241`ns (482%)        | `251`ns (502%)                 | `4,149,378`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `351`ns (702%)        | `361`ns (722%)                 | `2,849,003`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `481`ns (962%)        | `490`ns (980%)                 | `2,079,002`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `541`ns (1,082%)      | `561`ns (1,122%)               | `1,848,429`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,102`ns (2,204%)    | `1,142`ns (2,284%)             | `907,441`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,044`ns (4,088%)    | `2,073`ns (4,146%)             | `489,237`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `621`ns (100%)        | `701`ns (113%)                 | `1,610,306`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,273`ns (205%)      | `1,463`ns (236%)               | `785,546`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `26,271`ns (4,230%)   | `28,255`ns (4,550%)            | `38,065`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `60`ns (120%)                  | `20,000,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `100`ns (200%)        | `101`ns (202%)                 | `10,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (240%)        | `140`ns (280%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `160`ns (320%)        | `161`ns (322%)                 | `6,250,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `220`ns (440%)        | `240`ns (480%)                 | `4,545,455`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `451`ns (902%)        | `451`ns (902%)                 | `2,217,295`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,095`ns (4,190%)    | `2,125`ns (4,250%)             | `477,327`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (240%)        | `121`ns (242%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `130`ns (260%)        | `140`ns (280%)                 | `7,692,308`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `140`ns (280%)        | `140`ns (280%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `521`ns (1,042%)      | `551`ns (1,102%)               | `1,919,386`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,112`ns (2,224%)    | `1,122`ns (2,244%)             | `899,281`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,915`ns (5,830%)    | `2,947`ns (5,894%)             | `343,053`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `201`ns (100%)        | `210`ns (104%)                 | `4,975,124`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `230`ns (114%)        | `231`ns (115%)                 | `4,347,826`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `271`ns (135%)        | `280`ns (139%)                 | `3,690,037`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `100`ns (200%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
