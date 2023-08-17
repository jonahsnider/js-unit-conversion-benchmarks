# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 17 Aug 2023 22:37:38 GMT with Node.js v18.17.1 (V8 v10.2.154.26-node.26) on fv-az210-314 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

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
| [uom](https://npmjs.com/package/uom) (fast)                        | `701`ns (349%)        | `800`ns (398%)                 | `1,426,534`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `801`ns (399%)        | `901`ns (448%)                 | `1,248,439`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,101`ns (548%)      | `1,200`ns (597%)               | `908,265`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,600`ns (796%)      | `1,800`ns (896%)               | `625,000`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,900`ns (945%)      | `2,101`ns (1,045%)             | `526,316`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `3,101`ns (1,543%)    | `3,401`ns (1,692%)             | `322,477`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,303`ns (2,638%)    | `5,903`ns (2,937%)             | `188,573`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,703`ns (4,330%)    | `9,007`ns (4,481%)             | `114,903`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `1,700`ns (100%)      | `1,800`ns (106%)               | `588,235`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `60,031`ns (3,531%)   | `66,815`ns (3,930%)            | `16,658`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `72,639`ns (4,273%)   | `75,007`ns (4,412%)            | `13,767`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `400`ns (199%)        | `401`ns (200%)                 | `2,500,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `500`ns (249%)        | `700`ns (348%)                 | `2,000,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `600`ns (299%)        | `602`ns (300%)                 | `1,666,667`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,400`ns (697%)      | `1,601`ns (797%)               | `714,286`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,701`ns (846%)      | `2,000`ns (995%)               | `587,889`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,903`ns (2,439%)    | `5,403`ns (2,688%)             | `203,957`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `400`ns (199%)        | `500`ns (249%)                 | `2,500,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `701`ns (349%)        | `801`ns (399%)                 | `1,426,534`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,600`ns (796%)      | `1,901`ns (946%)               | `625,000`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `2,001`ns (996%)      | `2,301`ns (1,145%)             | `499,750`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,303`ns (2,638%)    | `5,503`ns (2,738%)             | `188,573`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,403`ns (3,186%)    | `6,903`ns (3,434%)             | `156,177`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `500`ns (100%)        | `500`ns (100%)                 | `2,000,000`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `500`ns (100%)        | `600`ns (120%)                 | `2,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `600`ns (120%)        | `602`ns (120%)                 | `1,666,667`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `300`ns (100%)        | `301`ns (100%)                 | `3,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `400`ns (133%)        | `401`ns (134%)                 | `2,500,000`/sec       |

<!-- endblock(results) -->
