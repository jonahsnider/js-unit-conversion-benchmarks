# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 20 Dec 2022 21:40:05 GMT with Node.js v18.12.1 (V8 v10.2.154.15-node.12) on fv-az507-628 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

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
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `301`ns (150%)        | `301`ns (150%)                 | `3,322,259`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `500`ns (249%)        | `500`ns (249%)                 | `2,000,000`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `701`ns (349%)        | `701`ns (349%)                 | `1,426,534`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,000`ns (498%)      | `1,001`ns (498%)               | `1,000,000`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,001`ns (498%)      | `1,100`ns (547%)               | `999,001`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,601`ns (797%)      | `1,700`ns (846%)               | `624,610`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,601`ns (1,792%)    | `3,701`ns (1,841%)             | `277,701`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `7,803`ns (3,882%)    | `7,903`ns (3,932%)             | `128,156`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `1,000`ns (100%)      | `1,001`ns (100%)               | `1,000,000`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `39,103`ns (3,910%)   | `43,615`ns (4,362%)            | `25,573`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `70,207`ns (7,021%)   | `71,935`ns (7,194%)            | `14,244`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (150%)        | `301`ns (150%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `400`ns (199%)        | `401`ns (200%)                 | `2,500,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `500`ns (249%)        | `500`ns (249%)                 | `2,000,000`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,000`ns (498%)      | `1,001`ns (498%)               | `1,000,000`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,100`ns (547%)      | `1,101`ns (548%)               | `909,091`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,801`ns (1,891%)    | `3,801`ns (1,891%)             | `263,089`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (150%)        | `301`ns (150%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `400`ns (199%)        | `400`ns (199%)                 | `2,500,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,001`ns (498%)      | `1,100`ns (547%)               | `999,001`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,400`ns (697%)      | `1,401`ns (697%)               | `714,286`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,003`ns (2,489%)    | `5,003`ns (2,489%)             | `199,880`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,203`ns (2,589%)    | `5,303`ns (2,638%)             | `192,197`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `500`ns (100%)        | `500`ns (100%)                 | `2,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `500`ns (100%)        | `600`ns (120%)                 | `2,000,000`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `500`ns (100%)        | `500`ns (100%)                 | `2,000,000`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `300`ns (100%)        | `301`ns (100%)                 | `3,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `401`ns (134%)        | `500`ns (167%)                 | `2,493,766`/sec       |

<!-- endblock(results) -->
