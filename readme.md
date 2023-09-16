# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 16 Sep 2023 06:04:45 GMT with Node.js v18.17.1 (V8 v10.2.154.26-node.26) on fv-az470-47 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `401`ns (201%)        | `500`ns (250%)                 | `2,493,766`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `701`ns (351%)        | `801`ns (401%)                 | `1,426,534`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `800`ns (400%)        | `900`ns (450%)                 | `1,250,000`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,101`ns (551%)      | `1,200`ns (600%)               | `908,265`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,600`ns (800%)      | `1,701`ns (851%)               | `625,000`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,800`ns (900%)      | `2,000`ns (1,000%)             | `555,556`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `3,201`ns (1,601%)    | `3,501`ns (1,751%)             | `312,402`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,703`ns (2,852%)    | `6,103`ns (3,052%)             | `175,346`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,903`ns (4,452%)    | `9,503`ns (4,752%)             | `112,322`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `1,500`ns (100%)      | `1,601`ns (107%)               | `666,667`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `55,615`ns (3,708%)   | `64,831`ns (4,322%)            | `17,981`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `63,103`ns (4,207%)   | `73,343`ns (4,890%)            | `15,847`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `101`ns (100%)        | `200`ns (198%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (297%)        | `300`ns (297%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `401`ns (397%)        | `600`ns (594%)                 | `2,493,766`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `501`ns (496%)        | `600`ns (594%)                 | `1,996,008`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,200`ns (1,188%)    | `1,401`ns (1,387%)             | `833,333`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,500`ns (1,485%)    | `1,800`ns (1,782%)             | `666,667`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,303`ns (4,260%)    | `4,703`ns (4,656%)             | `232,396`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (150%)        | `400`ns (200%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `500`ns (250%)        | `701`ns (351%)                 | `2,000,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,601`ns (801%)      | `1,901`ns (951%)               | `624,610`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,901`ns (951%)      | `2,101`ns (1,051%)             | `526,039`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,103`ns (2,552%)    | `5,503`ns (2,752%)             | `195,963`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,203`ns (3,102%)    | `6,603`ns (3,302%)             | `161,212`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `400`ns (100%)        | `401`ns (100%)                 | `2,500,000`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `401`ns (100%)        | `500`ns (125%)                 | `2,493,766`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `501`ns (125%)        | `501`ns (125%)                 | `1,996,008`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `201`ns (100%)        | `300`ns (149%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `400`ns (199%)        | `401`ns (200%)                 | `2,500,000`/sec       |

<!-- endblock(results) -->
