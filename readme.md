# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 19 Oct 2023 03:55:56 GMT with Node.js v18.18.2 (V8 v10.2.154.26-node.26) on fv-az176-179 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (150%)        | `400`ns (199%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `301`ns (150%)        | `301`ns (150%)                 | `3,322,259`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `500`ns (249%)        | `500`ns (249%)                 | `2,000,000`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `701`ns (349%)        | `800`ns (398%)                 | `1,426,534`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,000`ns (498%)      | `1,001`ns (498%)               | `1,000,000`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,000`ns (498%)      | `1,001`ns (498%)               | `1,000,000`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,001`ns (996%)      | `2,101`ns (1,045%)             | `499,750`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,701`ns (1,841%)    | `3,801`ns (1,891%)             | `270,197`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,607`ns (4,282%)    | `8,807`ns (4,382%)             | `116,185`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `1,000`ns (100%)      | `1,001`ns (100%)               | `1,000,000`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `47,231`ns (4,723%)   | `53,535`ns (5,354%)            | `21,173`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `80,255`ns (8,026%)   | `82,367`ns (8,237%)            | `12,460`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (150%)        | `400`ns (199%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `400`ns (199%)        | `400`ns (199%)                 | `2,500,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `401`ns (200%)        | `500`ns (249%)                 | `2,493,766`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,000`ns (498%)      | `1,001`ns (498%)               | `1,000,000`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,100`ns (547%)      | `1,102`ns (548%)               | `909,091`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,103`ns (2,041%)    | `4,203`ns (2,091%)             | `243,724`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (150%)        | `301`ns (150%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `301`ns (150%)        | `400`ns (199%)                 | `3,322,259`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,001`ns (498%)      | `1,100`ns (547%)               | `999,001`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,301`ns (647%)      | `1,401`ns (697%)               | `768,640`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,303`ns (2,638%)    | `5,403`ns (2,688%)             | `188,573`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,403`ns (2,688%)    | `5,503`ns (2,738%)             | `185,082`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `402`ns (100%)        | `500`ns (124%)                 | `2,487,562`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `500`ns (124%)        | `500`ns (124%)                 | `2,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `501`ns (125%)        | `600`ns (149%)                 | `1,996,008`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `300`ns (100%)        | `301`ns (100%)                 | `3,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `400`ns (133%)        | `401`ns (134%)                 | `2,500,000`/sec       |

<!-- endblock(results) -->
