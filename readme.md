# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 30 Sep 2026 03:12:27 GMT with Node.js v26.10.0 (V8 v14.6.202.34-node.34) on runnervmtr4k5 (Linux-x64 AMD EPYC 9V74 80-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (240%)        | `140`ns (280%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `131`ns (262%)        | `140`ns (280%)                 | `7,633,588`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (280%)        | `141`ns (282%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `220`ns (440%)        | `240`ns (480%)                 | `4,545,455`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `371`ns (742%)        | `380`ns (760%)                 | `2,695,418`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `501`ns (1,002%)      | `501`ns (1,002%)               | `1,996,008`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `541`ns (1,082%)      | `561`ns (1,122%)               | `1,848,429`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,082`ns (2,164%)    | `1,101`ns (2,202%)             | `924,214`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,773`ns (3,546%)    | `1,812`ns (3,624%)             | `564,016`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `340`ns (100%)        | `360`ns (106%)                 | `2,941,176`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,092`ns (321%)      | `1,162`ns (342%)               | `915,751`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `19,407`ns (5,708%)   | `19,727`ns (5,802%)            | `51,528`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `70`ns (100%)         | `71`ns (101%)                  | `14,285,714`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (171%)        | `130`ns (186%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `140`ns (200%)        | `150`ns (214%)                 | `7,142,857`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `170`ns (243%)        | `171`ns (244%)                 | `5,882,353`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `220`ns (314%)        | `231`ns (330%)                 | `4,545,455`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `511`ns (730%)        | `521`ns (744%)                 | `1,956,947`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,973`ns (2,819%)    | `2,013`ns (2,876%)             | `506,842`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (240%)        | `121`ns (242%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `150`ns (300%)        | `150`ns (300%)                 | `6,666,667`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `160`ns (320%)        | `170`ns (340%)                 | `6,250,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `490`ns (980%)        | `501`ns (1,002%)               | `2,040,816`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,241`ns (2,482%)    | `1,242`ns (2,484%)             | `805,802`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,795`ns (5,590%)    | `2,835`ns (5,670%)             | `357,782`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `190`ns (100%)        | `200`ns (105%)                 | `5,263,158`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `240`ns (126%)        | `250`ns (132%)                 | `4,166,667`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `280`ns (147%)        | `290`ns (153%)                 | `3,571,429`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `100`ns (200%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
