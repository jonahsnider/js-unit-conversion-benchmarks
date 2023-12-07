# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 07 Dec 2023 00:33:39 GMT with Node.js v18.18.2 (V8 v10.2.154.26-node.26) on fv-az1024-288 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `231`ns (116%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `351`ns (176%)        | `401`ns (201%)                 | `2,849,003`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `561`ns (281%)        | `612`ns (306%)                 | `1,782,531`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `661`ns (331%)        | `732`ns (366%)                 | `1,512,859`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,001`ns (501%)      | `1,112`ns (556%)               | `999,001`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,374`ns (687%)      | `1,544`ns (772%)               | `727,802`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,464`ns (732%)      | `1,614`ns (807%)               | `683,060`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,767`ns (1,384%)    | `2,995`ns (1,498%)             | `361,402`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,651`ns (2,326%)    | `5,011`ns (2,506%)             | `215,008`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,503`ns (4,752%)    | `9,695`ns (4,848%)             | `105,230`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `822`ns (100%)        | `912`ns (111%)                 | `1,216,545`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,935`ns (3,885%)   | `39,103`ns (4,757%)            | `31,314`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `40,383`ns (4,913%)   | `41,023`ns (4,991%)            | `24,763`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `191`ns (100%)        | `211`ns (110%)                 | `5,235,602`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `332`ns (174%)        | `382`ns (200%)                 | `3,012,048`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `431`ns (226%)        | `491`ns (257%)                 | `2,320,186`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `571`ns (299%)        | `653`ns (342%)                 | `1,751,313`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,192`ns (624%)      | `1,322`ns (692%)               | `838,926`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,313`ns (687%)      | `1,534`ns (803%)               | `761,615`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,439`ns (2,324%)    | `5,091`ns (2,665%)             | `225,276`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `202`ns (100%)        | `231`ns (114%)                 | `4,950,495`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `391`ns (194%)        | `431`ns (213%)                 | `2,557,545`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `550`ns (272%)        | `592`ns (293%)                 | `1,818,182`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,383`ns (685%)      | `1,474`ns (730%)               | `723,066`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,824`ns (903%)      | `1,955`ns (968%)               | `548,246`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,991`ns (2,966%)    | `6,135`ns (3,037%)             | `166,917`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,803`ns (3,368%)    | `7,055`ns (3,493%)             | `146,994`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `572`ns (100%)        | `652`ns (114%)                 | `1,748,252`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `601`ns (105%)        | `671`ns (117%)                 | `1,663,894`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `682`ns (119%)        | `762`ns (133%)                 | `1,466,276`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `301`ns (100%)        | `332`ns (110%)                 | `3,322,259`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `512`ns (170%)        | `571`ns (190%)                 | `1,953,125`/sec       |

<!-- endblock(results) -->
