# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 07 Dec 2024 05:22:29 GMT with Node.js v22.11.0 (V8 v12.4.254.21-node.21) on fv-az1532-832 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `110`ns (220%)        | `111`ns (222%)                 | `9,090,909`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (260%)        | `131`ns (262%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `161`ns (322%)        | `170`ns (340%)                 | `6,211,180`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `251`ns (502%)        | `261`ns (522%)                 | `3,984,064`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `420`ns (840%)        | `421`ns (842%)                 | `2,380,952`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `471`ns (942%)        | `481`ns (962%)                 | `2,123,142`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `571`ns (1,142%)      | `591`ns (1,182%)               | `1,751,313`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,052`ns (2,104%)    | `1,071`ns (2,142%)             | `950,570`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,024`ns (4,048%)    | `2,044`ns (4,088%)             | `494,071`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `611`ns (100%)        | `701`ns (115%)                 | `1,636,661`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,232`ns (202%)      | `1,332`ns (218%)               | `811,688`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `27,087`ns (4,433%)   | `28,735`ns (4,703%)            | `36,918`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `60`ns (100%)                  | `16,666,667`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `110`ns (183%)        | `110`ns (183%)                 | `9,090,909`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `111`ns (185%)        | `120`ns (200%)                 | `9,009,009`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (200%)        | `131`ns (218%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `221`ns (368%)        | `230`ns (383%)                 | `4,524,887`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `551`ns (918%)        | `561`ns (935%)                 | `1,814,882`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,115`ns (3,525%)    | `2,135`ns (3,558%)             | `472,813`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `110`ns (220%)        | `120`ns (240%)                 | `9,090,909`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `130`ns (260%)        | `131`ns (262%)                 | `7,692,308`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (260%)        | `140`ns (280%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `491`ns (982%)        | `501`ns (1,002%)               | `2,036,660`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,112`ns (2,224%)    | `1,122`ns (2,244%)             | `899,281`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,885`ns (5,770%)    | `2,907`ns (5,814%)             | `346,620`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `210`ns (100%)        | `220`ns (105%)                 | `4,761,905`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `231`ns (110%)        | `240`ns (114%)                 | `4,329,004`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `291`ns (139%)        | `301`ns (143%)                 | `3,436,426`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `110`ns (220%)        | `111`ns (222%)                 | `9,090,909`/sec       |

<!-- endblock(results) -->
