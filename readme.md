# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 04 Oct 2026 00:22:45 GMT with Node.js v26.10.0 (V8 v14.6.202.34-node.34) on runnervm8df0l (Linux-x64 AMD EPYC 9V74 80-Core Processor)

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
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (260%)        | `140`ns (280%)                 | `7,692,308`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `141`ns (282%)        | `150`ns (300%)                 | `7,092,199`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `160`ns (320%)        | `170`ns (340%)                 | `6,250,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `230`ns (460%)        | `241`ns (482%)                 | `4,347,826`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `390`ns (780%)        | `401`ns (802%)                 | `2,564,103`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `501`ns (1,002%)      | `511`ns (1,022%)               | `1,996,008`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `531`ns (1,062%)      | `551`ns (1,102%)               | `1,883,239`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,091`ns (2,182%)    | `1,102`ns (2,204%)             | `916,590`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,832`ns (3,664%)    | `1,872`ns (3,744%)             | `545,852`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `351`ns (100%)        | `380`ns (108%)                 | `2,849,003`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,082`ns (308%)      | `1,172`ns (334%)               | `924,214`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `19,455`ns (5,543%)   | `19,839`ns (5,652%)            | `51,401`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `61`ns (100%)         | `70`ns (115%)                  | `16,393,443`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (197%)        | `120`ns (197%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `150`ns (246%)        | `151`ns (248%)                 | `6,666,667`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `160`ns (262%)        | `170`ns (279%)                 | `6,250,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `230`ns (377%)        | `240`ns (393%)                 | `4,347,826`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `511`ns (838%)        | `511`ns (838%)                 | `1,956,947`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,963`ns (3,218%)    | `1,993`ns (3,267%)             | `509,424`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (240%)        | `121`ns (242%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `131`ns (262%)        | `140`ns (280%)                 | `7,633,588`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `161`ns (322%)        | `170`ns (340%)                 | `6,211,180`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `471`ns (942%)        | `510`ns (1,020%)               | `2,123,142`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,242`ns (2,484%)    | `1,242`ns (2,484%)             | `805,153`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,795`ns (5,590%)    | `2,825`ns (5,650%)             | `357,782`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `191`ns (100%)        | `200`ns (105%)                 | `5,235,602`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `231`ns (121%)        | `240`ns (126%)                 | `4,329,004`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `280`ns (147%)        | `290`ns (152%)                 | `3,571,429`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `90`ns (180%)         | `100`ns (200%)                 | `11,111,111`/sec      |

<!-- endblock(results) -->
