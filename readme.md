# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 06 Jan 2024 00:15:10 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az738-229 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `112`ns (100%)        | `201`ns (179%)                 | `8,928,571`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `212`ns (189%)        | `400`ns (357%)                 | `4,716,981`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `231`ns (206%)        | `512`ns (457%)                 | `4,329,004`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `341`ns (304%)        | `661`ns (590%)                 | `2,932,551`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `521`ns (465%)        | `1,182`ns (1,055%)             | `1,919,386`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `661`ns (590%)        | `1,383`ns (1,235%)             | `1,512,859`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `701`ns (626%)        | `1,383`ns (1,235%)             | `1,426,534`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,252`ns (1,118%)    | `2,725`ns (2,433%)             | `798,722`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,675`ns (2,388%)    | `4,831`ns (4,313%)             | `373,832`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,591`ns (4,099%)    | `9,423`ns (8,413%)             | `217,817`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `772`ns (100%)        | `883`ns (114%)                 | `1,295,337`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `32,095`ns (4,157%)   | `39,039`ns (5,057%)            | `31,158`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `40,063`ns (5,190%)   | `40,735`ns (5,277%)            | `24,961`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `191`ns (100%)        | `212`ns (111%)                 | `5,235,602`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `372`ns (195%)        | `411`ns (215%)                 | `2,688,172`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `502`ns (263%)        | `552`ns (289%)                 | `1,992,032`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `611`ns (320%)        | `652`ns (341%)                 | `1,636,661`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,313`ns (687%)      | `1,404`ns (735%)               | `761,615`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,393`ns (729%)      | `1,493`ns (782%)               | `717,875`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,771`ns (2,498%)    | `4,983`ns (2,609%)             | `209,600`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `210`ns (100%)        | `232`ns (110%)                 | `4,761,905`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `392`ns (187%)        | `441`ns (210%)                 | `2,551,020`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `461`ns (220%)        | `511`ns (243%)                 | `2,169,197`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,323`ns (630%)      | `1,413`ns (673%)               | `755,858`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,784`ns (850%)      | `1,944`ns (926%)               | `560,538`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,023`ns (2,868%)    | `6,175`ns (2,940%)             | `166,030`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,647`ns (3,165%)    | `6,943`ns (3,306%)             | `150,444`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `561`ns (100%)        | `632`ns (113%)                 | `1,782,531`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `591`ns (105%)        | `652`ns (116%)                 | `1,692,047`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `652`ns (116%)        | `741`ns (132%)                 | `1,533,742`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `301`ns (100%)        | `331`ns (110%)                 | `3,322,259`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `531`ns (176%)        | `583`ns (194%)                 | `1,883,239`/sec       |

<!-- endblock(results) -->
