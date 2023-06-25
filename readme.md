# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 25 Jun 2023 21:44:11 GMT with Node.js v18.16.0 (V8 v10.2.154.26-node.26) on fv-az178-408 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `400`ns (199%)        | `401`ns (200%)                 | `2,500,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `700`ns (348%)        | `701`ns (349%)                 | `1,428,571`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `801`ns (399%)        | `901`ns (448%)                 | `1,248,439`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,000`ns (498%)      | `1,100`ns (547%)               | `1,000,000`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,600`ns (796%)      | `1,701`ns (846%)               | `625,000`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,601`ns (797%)      | `1,801`ns (896%)               | `624,610`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,701`ns (1,344%)    | `3,001`ns (1,493%)             | `370,233`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,203`ns (2,589%)    | `5,503`ns (2,738%)             | `192,197`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,103`ns (4,529%)    | `9,607`ns (4,780%)             | `109,854`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `1,701`ns (100%)      | `1,900`ns (112%)               | `587,889`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `62,623`ns (3,682%)   | `73,919`ns (4,346%)            | `15,969`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `75,647`ns (4,447%)   | `87,615`ns (5,151%)            | `13,219`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (150%)        | `400`ns (199%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `401`ns (200%)        | `600`ns (299%)                 | `2,493,766`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `501`ns (249%)        | `601`ns (299%)                 | `1,996,008`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,301`ns (647%)      | `1,600`ns (796%)               | `768,640`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,401`ns (697%)      | `1,800`ns (896%)               | `713,776`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,503`ns (2,240%)    | `4,703`ns (2,340%)             | `222,074`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (150%)        | `301`ns (150%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `500`ns (249%)        | `701`ns (349%)                 | `2,000,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,501`ns (747%)      | `1,901`ns (946%)               | `666,223`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,700`ns (846%)      | `2,000`ns (995%)               | `588,235`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,003`ns (2,489%)    | `5,303`ns (2,638%)             | `199,880`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,903`ns (2,937%)    | `6,203`ns (3,086%)             | `169,405`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `401`ns (100%)        | `401`ns (100%)                 | `2,493,766`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `401`ns (100%)        | `401`ns (100%)                 | `2,493,766`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `500`ns (125%)        | `501`ns (125%)                 | `2,000,000`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `400`ns (199%)        | `401`ns (200%)                 | `2,500,000`/sec       |

<!-- endblock(results) -->
