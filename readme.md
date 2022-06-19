# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 19 Jun 2022 04:00:31 GMT with Node.js v18.4.0 (V8 v10.2.154.4-node.8) on fv-az198-758 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

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
| [uom](https://npmjs.com/package/uom) (fast)                        | `601`ns (299%)        | `700`ns (348%)                 | `1,663,894`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `700`ns (348%)        | `800`ns (398%)                 | `1,428,571`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,000`ns (498%)      | `1,100`ns (547%)               | `1,000,000`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,401`ns (697%)      | `1,601`ns (797%)               | `713,776`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,601`ns (797%)      | `1,800`ns (896%)               | `624,610`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,401`ns (1,195%)    | `2,701`ns (1,344%)             | `416,493`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,803`ns (2,390%)    | `5,003`ns (2,489%)             | `208,203`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,607`ns (4,282%)    | `9,103`ns (4,529%)             | `116,185`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `1,301`ns (100%)      | `1,501`ns (115%)               | `768,640`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `53,823`ns (4,137%)   | `64,127`ns (4,929%)            | `18,579`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `71,423`ns (5,490%)   | `82,815`ns (6,365%)            | `14,001`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (150%)        | `301`ns (150%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `401`ns (200%)        | `501`ns (249%)                 | `2,493,766`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `501`ns (249%)        | `601`ns (299%)                 | `1,996,008`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,101`ns (548%)      | `1,401`ns (697%)               | `908,265`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,301`ns (647%)      | `1,700`ns (846%)               | `768,640`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,001`ns (1,991%)    | `4,203`ns (2,091%)             | `249,938`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (150%)        | `401`ns (200%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `501`ns (249%)        | `701`ns (349%)                 | `1,996,008`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,600`ns (796%)      | `1,900`ns (945%)               | `625,000`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,701`ns (846%)      | `2,000`ns (995%)               | `587,889`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,203`ns (2,589%)    | `5,503`ns (2,738%)             | `192,197`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,699`ns (2,835%)    | `6,003`ns (2,987%)             | `175,469`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `401`ns (100%)        | `401`ns (100%)                 | `2,493,766`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `401`ns (100%)        | `500`ns (125%)                 | `2,493,766`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `500`ns (125%)        | `501`ns (125%)                 | `2,000,000`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `201`ns (100%)        | `300`ns (149%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `400`ns (199%)        | `401`ns (200%)                 | `2,500,000`/sec       |

<!-- endblock(results) -->
