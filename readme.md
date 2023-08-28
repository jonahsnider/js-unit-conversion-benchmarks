# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 28 Aug 2023 07:17:34 GMT with Node.js v18.17.1 (V8 v10.2.154.26-node.26) on fv-az360-464 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (149%)        | `301`ns (150%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `301`ns (150%)        | `400`ns (199%)                 | `3,322,259`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `401`ns (200%)        | `500`ns (249%)                 | `2,493,766`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `801`ns (399%)        | `900`ns (448%)                 | `1,248,439`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `901`ns (448%)        | `1,000`ns (498%)               | `1,109,878`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,000`ns (498%)      | `1,001`ns (498%)               | `1,000,000`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,800`ns (896%)      | `1,800`ns (896%)               | `555,556`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,703`ns (1,842%)    | `3,801`ns (1,891%)             | `270,051`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,607`ns (4,282%)    | `8,703`ns (4,330%)             | `116,185`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `1,000`ns (100%)      | `1,001`ns (100%)               | `1,000,000`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `45,119`ns (4,512%)   | `49,215`ns (4,922%)            | `22,164`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `76,927`ns (7,693%)   | `78,911`ns (7,891%)            | `12,999`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (149%)        | `301`ns (150%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `301`ns (150%)        | `400`ns (199%)                 | `3,322,259`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `401`ns (200%)        | `500`ns (249%)                 | `2,493,766`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,000`ns (498%)      | `1,001`ns (498%)               | `1,000,000`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,000`ns (498%)      | `1,001`ns (498%)               | `1,000,000`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,701`ns (1,841%)    | `3,801`ns (1,891%)             | `270,197`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (149%)        | `301`ns (150%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `301`ns (150%)        | `400`ns (199%)                 | `3,322,259`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,000`ns (498%)      | `1,100`ns (547%)               | `1,000,000`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,301`ns (647%)      | `1,301`ns (647%)               | `768,640`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,203`ns (2,589%)    | `5,303`ns (2,638%)             | `192,197`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,503`ns (2,738%)    | `5,503`ns (2,738%)             | `181,719`/sec         |

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
