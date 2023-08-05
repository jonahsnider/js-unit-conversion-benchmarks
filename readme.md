# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 05 Aug 2023 15:45:21 GMT with Node.js v18.17.0 (V8 v10.2.154.26-node.26) on fv-az1131-28 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `401`ns (200%)        | `500`ns (249%)                 | `2,493,766`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `701`ns (349%)        | `801`ns (399%)                 | `1,426,534`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `701`ns (349%)        | `801`ns (399%)                 | `1,426,534`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,100`ns (547%)      | `1,200`ns (597%)               | `909,091`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,600`ns (796%)      | `1,800`ns (896%)               | `625,000`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,800`ns (896%)      | `2,101`ns (1,045%)             | `555,556`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,801`ns (1,394%)    | `3,101`ns (1,543%)             | `357,015`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,303`ns (2,638%)    | `5,903`ns (2,937%)             | `188,573`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,807`ns (4,382%)    | `9,207`ns (4,581%)             | `113,546`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `2,000`ns (100%)      | `2,301`ns (115%)               | `500,000`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `62,623`ns (3,131%)   | `74,303`ns (3,715%)            | `15,969`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `72,063`ns (3,603%)   | `84,735`ns (4,237%)            | `13,877`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (150%)        | `400`ns (199%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `500`ns (249%)        | `701`ns (349%)                 | `2,000,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `600`ns (299%)        | `701`ns (349%)                 | `1,666,667`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,301`ns (647%)      | `1,501`ns (747%)               | `768,640`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,601`ns (797%)      | `1,901`ns (946%)               | `624,610`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,503`ns (2,240%)    | `4,803`ns (2,390%)             | `222,074`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `400`ns (200%)        | `401`ns (201%)                 | `2,500,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `500`ns (250%)        | `701`ns (351%)                 | `2,000,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,700`ns (850%)      | `2,001`ns (1,001%)             | `588,235`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,800`ns (900%)      | `2,201`ns (1,101%)             | `555,556`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,303`ns (2,652%)    | `5,603`ns (2,802%)             | `188,573`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,503`ns (3,252%)    | `7,503`ns (3,752%)             | `153,775`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `400`ns (100%)        | `401`ns (100%)                 | `2,500,000`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `401`ns (100%)        | `500`ns (125%)                 | `2,493,766`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `500`ns (125%)        | `501`ns (125%)                 | `2,000,000`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `300`ns (100%)        | `301`ns (100%)                 | `3,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `400`ns (133%)        | `401`ns (134%)                 | `2,500,000`/sec       |

<!-- endblock(results) -->
