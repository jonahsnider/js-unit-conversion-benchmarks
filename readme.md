# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 30 Mar 2025 13:28:07 GMT with Node.js v22.14.0 (V8 v12.4.254.21-node.22) on fv-az1308-99 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (260%)        | `131`ns (262%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `150`ns (300%)        | `160`ns (320%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `250`ns (500%)        | `260`ns (520%)                 | `4,000,000`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `390`ns (780%)        | `391`ns (782%)                 | `2,564,103`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `461`ns (922%)        | `471`ns (942%)                 | `2,169,197`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `561`ns (1,122%)      | `572`ns (1,144%)               | `1,782,531`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,072`ns (2,144%)    | `1,102`ns (2,204%)             | `932,836`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,034`ns (4,068%)    | `2,065`ns (4,130%)             | `491,642`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `701`ns (100%)        | `781`ns (111%)                 | `1,426,534`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,172`ns (167%)      | `1,302`ns (186%)               | `853,242`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `25,711`ns (3,668%)   | `27,711`ns (3,953%)            | `38,894`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `70`ns (117%)                  | `16,666,667`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `100`ns (167%)        | `101`ns (168%)                 | `10,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `100`ns (167%)        | `101`ns (168%)                 | `10,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `111`ns (185%)        | `120`ns (200%)                 | `9,009,009`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `251`ns (418%)        | `260`ns (433%)                 | `3,984,064`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `471`ns (785%)        | `471`ns (785%)                 | `2,123,142`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,095`ns (3,492%)    | `2,115`ns (3,525%)             | `477,327`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (260%)        | `131`ns (262%)                 | `7,692,308`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (260%)        | `140`ns (280%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `131`ns (262%)        | `140`ns (280%)                 | `7,633,588`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `491`ns (982%)        | `511`ns (1,022%)               | `2,036,660`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,132`ns (2,264%)    | `1,142`ns (2,284%)             | `883,392`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,945`ns (5,890%)    | `2,967`ns (5,934%)             | `339,559`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `191`ns (100%)        | `200`ns (105%)                 | `5,235,602`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `230`ns (120%)        | `231`ns (121%)                 | `4,347,826`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `280`ns (147%)        | `281`ns (147%)                 | `3,571,429`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `101`ns (202%)        | `110`ns (220%)                 | `9,900,990`/sec       |

<!-- endblock(results) -->
