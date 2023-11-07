# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 07 Nov 2023 12:13:46 GMT with Node.js v18.18.2 (V8 v10.2.154.26-node.26) on fv-az218-669 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

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
| [moment](https://npmjs.com/package/moment) (popular)               | `701`ns (349%)        | `801`ns (399%)                 | `1,426,534`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,001`ns (498%)      | `1,100`ns (547%)               | `999,001`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,101`ns (548%)      | `1,200`ns (597%)               | `908,265`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,201`ns (1,095%)    | `2,301`ns (1,145%)             | `454,339`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,901`ns (1,941%)    | `3,901`ns (1,941%)             | `256,345`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,407`ns (4,183%)    | `8,503`ns (4,230%)             | `118,948`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `900`ns (100%)        | `901`ns (100%)                 | `1,111,111`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `45,023`ns (5,003%)   | `52,511`ns (5,835%)            | `22,211`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `77,311`ns (8,590%)   | `79,359`ns (8,818%)            | `12,935`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (150%)        | `301`ns (150%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `301`ns (150%)        | `400`ns (199%)                 | `3,322,259`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `500`ns (249%)        | `500`ns (249%)                 | `2,000,000`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `901`ns (448%)        | `901`ns (448%)                 | `1,109,878`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,000`ns (498%)      | `1,001`ns (498%)               | `1,000,000`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,901`ns (1,941%)    | `4,001`ns (1,991%)             | `256,345`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (149%)        | `301`ns (150%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `301`ns (150%)        | `400`ns (199%)                 | `3,322,259`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,001`ns (498%)      | `1,100`ns (547%)               | `999,001`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,301`ns (647%)      | `1,301`ns (647%)               | `768,640`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,103`ns (2,539%)    | `5,103`ns (2,539%)             | `195,963`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,203`ns (2,589%)    | `5,203`ns (2,589%)             | `192,197`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `401`ns (100%)        | `500`ns (125%)                 | `2,493,766`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `500`ns (125%)        | `500`ns (125%)                 | `2,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `501`ns (125%)        | `600`ns (150%)                 | `1,996,008`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `300`ns (100%)        | `301`ns (100%)                 | `3,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `401`ns (134%)        | `500`ns (167%)                 | `2,493,766`/sec       |

<!-- endblock(results) -->
