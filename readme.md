# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 15 Jan 2024 02:09:08 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az842-769 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `121`ns (100%)        | `210`ns (174%)                 | `8,264,463`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `210`ns (174%)        | `422`ns (349%)                 | `4,761,905`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `212`ns (175%)        | `492`ns (407%)                 | `4,716,981`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `342`ns (283%)        | `692`ns (572%)                 | `2,923,977`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `511`ns (422%)        | `1,182`ns (977%)               | `1,956,947`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `661`ns (546%)        | `1,413`ns (1,168%)             | `1,512,859`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `691`ns (571%)        | `1,534`ns (1,268%)             | `1,447,178`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,302`ns (1,076%)    | `2,797`ns (2,312%)             | `768,049`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,665`ns (2,202%)    | `5,051`ns (4,174%)             | `375,235`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,611`ns (3,811%)    | `9,671`ns (7,993%)             | `216,873`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `821`ns (100%)        | `953`ns (116%)                 | `1,218,027`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `32,079`ns (3,907%)   | `39,615`ns (4,825%)            | `31,173`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `39,871`ns (4,856%)   | `40,511`ns (4,934%)            | `25,081`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `221`ns (110%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `391`ns (195%)        | `431`ns (214%)                 | `2,557,545`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `472`ns (235%)        | `512`ns (255%)                 | `2,118,644`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `601`ns (299%)        | `652`ns (324%)                 | `1,663,894`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,313`ns (653%)      | `1,404`ns (699%)               | `761,615`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,404`ns (699%)      | `1,524`ns (758%)               | `712,251`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,843`ns (2,409%)    | `5,071`ns (2,523%)             | `206,484`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `221`ns (110%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `361`ns (180%)        | `422`ns (210%)                 | `2,770,083`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `422`ns (210%)        | `481`ns (239%)                 | `2,369,668`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,253`ns (623%)      | `1,373`ns (683%)               | `798,085`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,694`ns (843%)      | `1,955`ns (973%)               | `590,319`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,875`ns (2,923%)    | `6,163`ns (3,066%)             | `170,213`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,595`ns (3,281%)    | `7,187`ns (3,576%)             | `151,630`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `582`ns (100%)        | `651`ns (112%)                 | `1,718,213`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `602`ns (103%)        | `661`ns (114%)                 | `1,661,130`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `682`ns (117%)        | `762`ns (131%)                 | `1,466,276`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `311`ns (100%)        | `342`ns (110%)                 | `3,215,434`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `542`ns (174%)        | `602`ns (194%)                 | `1,845,018`/sec       |

<!-- endblock(results) -->
