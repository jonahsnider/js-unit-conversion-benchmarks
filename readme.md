# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 11 Sep 2026 20:11:55 GMT with Node.js v26.8.2 (V8 v14.6.202.34-node.28) on runnervmlun5p (Linux-x64 AMD EPYC 9V74 80-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `90`ns (225%)         | `91`ns (228%)                  | `11,111,111`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `100`ns (250%)        | `101`ns (253%)                 | `10,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (325%)        | `130`ns (325%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `170`ns (425%)        | `180`ns (450%)                 | `5,882,353`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `280`ns (700%)        | `290`ns (725%)                 | `3,571,429`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `381`ns (953%)        | `390`ns (975%)                 | `2,624,672`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `401`ns (1,003%)      | `431`ns (1,078%)               | `2,493,766`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `842`ns (2,105%)      | `922`ns (2,305%)               | `1,187,648`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,382`ns (3,455%)    | `1,412`ns (3,530%)             | `723,589`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `290`ns (100%)        | `310`ns (107%)                 | `3,448,276`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `891`ns (307%)        | `972`ns (335%)                 | `1,122,334`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `15,367`ns (5,299%)   | `15,607`ns (5,382%)            | `65,075`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `51`ns (100%)         | `60`ns (118%)                  | `19,607,843`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `90`ns (176%)         | `100`ns (196%)                 | `11,111,111`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `110`ns (216%)        | `110`ns (216%)                 | `9,090,909`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (235%)        | `121`ns (237%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `171`ns (335%)        | `181`ns (355%)                 | `5,847,953`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `401`ns (786%)        | `401`ns (786%)                 | `2,493,766`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,532`ns (3,004%)    | `1,562`ns (3,063%)             | `652,742`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `100`ns (250%)        | `110`ns (275%)                 | `10,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `100`ns (250%)        | `110`ns (275%)                 | `10,000,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (300%)        | `121`ns (303%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `391`ns (978%)        | `491`ns (1,228%)               | `2,557,545`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,172`ns (2,930%)    | `1,182`ns (2,955%)             | `853,242`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,203`ns (5,508%)    | `2,233`ns (5,583%)             | `453,926`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `150`ns (100%)        | `161`ns (107%)                 | `6,666,667`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `180`ns (120%)        | `200`ns (133%)                 | `5,555,556`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `221`ns (147%)        | `241`ns (161%)                 | `4,524,887`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `71`ns (178%)         | `80`ns (200%)                  | `14,084,507`/sec      |

<!-- endblock(results) -->
