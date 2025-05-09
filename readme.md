# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 09 May 2025 18:21:09 GMT with Node.js v22.15.0 (V8 v12.4.254.21-node.24) on fv-az1934-885 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `111`ns (222%)        | `120`ns (240%)                 | `9,009,009`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (260%)        | `131`ns (262%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `150`ns (300%)        | `151`ns (302%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `250`ns (500%)        | `251`ns (502%)                 | `4,000,000`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `421`ns (842%)        | `421`ns (842%)                 | `2,375,297`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `451`ns (902%)        | `451`ns (902%)                 | `2,217,295`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `532`ns (1,064%)      | `551`ns (1,102%)               | `1,879,699`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,022`ns (2,044%)    | `1,032`ns (2,064%)             | `978,474`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,994`ns (3,988%)    | `2,013`ns (4,026%)             | `501,505`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `551`ns (100%)        | `621`ns (113%)                 | `1,814,882`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,163`ns (211%)      | `1,302`ns (236%)               | `859,845`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `25,775`ns (4,678%)   | `27,743`ns (5,035%)            | `38,797`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `80`ns (100%)         | `80`ns (100%)                  | `12,500,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `100`ns (125%)        | `101`ns (126%)                 | `10,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `131`ns (164%)        | `140`ns (175%)                 | `7,633,588`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `141`ns (176%)        | `150`ns (188%)                 | `7,092,199`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `250`ns (313%)        | `261`ns (326%)                 | `4,000,000`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `461`ns (576%)        | `481`ns (601%)                 | `2,169,197`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,095`ns (2,619%)    | `2,115`ns (2,644%)             | `477,327`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `60`ns (120%)                  | `20,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `100`ns (200%)        | `101`ns (202%)                 | `10,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (240%)        | `121`ns (242%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `140`ns (280%)        | `140`ns (280%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `481`ns (962%)        | `491`ns (982%)                 | `2,079,002`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,092`ns (2,184%)    | `1,093`ns (2,186%)             | `915,751`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,875`ns (5,750%)    | `2,897`ns (5,794%)             | `347,826`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `201`ns (100%)        | `211`ns (105%)                 | `4,975,124`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `230`ns (114%)        | `231`ns (115%)                 | `4,347,826`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `271`ns (135%)        | `281`ns (140%)                 | `3,690,037`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `101`ns (202%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
