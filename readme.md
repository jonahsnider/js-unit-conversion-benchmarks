# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 17 Oct 2022 20:51:04 GMT with Node.js v18.10.0 (V8 v10.2.154.15-node.12) on fv-az278-55 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `401`ns (200%)        | `501`ns (249%)                 | `2,493,766`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `601`ns (299%)        | `700`ns (348%)                 | `1,663,894`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `800`ns (398%)        | `900`ns (448%)                 | `1,250,000`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,000`ns (498%)      | `1,100`ns (547%)               | `1,000,000`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,301`ns (647%)      | `1,600`ns (796%)               | `768,640`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,501`ns (747%)      | `1,700`ns (846%)               | `666,223`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,401`ns (1,195%)    | `2,701`ns (1,344%)             | `416,493`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,703`ns (2,340%)    | `5,003`ns (2,489%)             | `212,630`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,903`ns (4,429%)    | `9,407`ns (4,680%)             | `112,322`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `1,401`ns (100%)      | `1,600`ns (114%)               | `713,776`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `52,511`ns (3,748%)   | `61,311`ns (4,376%)            | `19,044`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `72,255`ns (5,157%)   | `80,255`ns (5,728%)            | `13,840`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (150%)        | `401`ns (200%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `401`ns (200%)        | `501`ns (249%)                 | `2,493,766`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `600`ns (299%)        | `601`ns (299%)                 | `1,666,667`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,400`ns (697%)      | `1,601`ns (797%)               | `714,286`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,400`ns (697%)      | `1,700`ns (846%)               | `714,286`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,503`ns (2,240%)    | `4,803`ns (2,390%)             | `222,074`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `400`ns (199%)        | `401`ns (200%)                 | `2,500,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `600`ns (299%)        | `800`ns (398%)                 | `1,666,667`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,701`ns (846%)      | `2,001`ns (996%)               | `587,889`/sec         |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,701`ns (846%)      | `2,000`ns (995%)               | `587,889`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,403`ns (2,688%)    | `5,703`ns (2,837%)             | `185,082`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,803`ns (2,887%)    | `6,203`ns (3,086%)             | `172,325`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `401`ns (100%)        | `401`ns (100%)                 | `2,493,766`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `401`ns (100%)        | `401`ns (100%)                 | `2,493,766`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `500`ns (125%)        | `501`ns (125%)                 | `2,000,000`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `201`ns (100%)        | `301`ns (150%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `401`ns (200%)        | `401`ns (200%)                 | `2,493,766`/sec       |

<!-- endblock(results) -->
