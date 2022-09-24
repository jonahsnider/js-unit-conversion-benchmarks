# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 24 Sep 2022 00:22:32 GMT with Node.js v18.9.0 (V8 v10.2.154.15-node.12) on fv-az203-219 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `500`ns (249%)        | `600`ns (299%)                 | `2,000,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `800`ns (398%)        | `801`ns (399%)                 | `1,250,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `801`ns (399%)        | `901`ns (448%)                 | `1,248,439`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,100`ns (547%)      | `1,200`ns (597%)               | `909,091`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,501`ns (747%)      | `1,800`ns (896%)               | `666,223`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,901`ns (946%)      | `2,301`ns (1,145%)             | `526,039`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,601`ns (1,294%)    | `2,801`ns (1,394%)             | `384,468`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,203`ns (2,589%)    | `6,003`ns (2,987%)             | `192,197`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,503`ns (4,230%)    | `8,903`ns (4,429%)             | `117,606`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `1,700`ns (100%)      | `1,800`ns (106%)               | `588,235`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `54,911`ns (3,230%)   | `61,119`ns (3,595%)            | `18,211`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `64,319`ns (3,783%)   | `68,927`ns (4,055%)            | `15,548`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (150%)        | `400`ns (199%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `500`ns (249%)        | `600`ns (299%)                 | `2,000,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `500`ns (249%)        | `600`ns (299%)                 | `2,000,000`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,200`ns (597%)      | `1,401`ns (697%)               | `833,333`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,700`ns (846%)      | `1,901`ns (946%)               | `588,235`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,703`ns (2,340%)    | `5,003`ns (2,489%)             | `212,630`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `400`ns (200%)        | `401`ns (201%)                 | `2,500,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `600`ns (300%)        | `701`ns (351%)                 | `1,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,600`ns (800%)      | `1,800`ns (900%)               | `625,000`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `2,000`ns (1,000%)    | `2,501`ns (1,251%)             | `500,000`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,003`ns (2,502%)    | `5,303`ns (2,652%)             | `199,880`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,603`ns (3,302%)    | `7,403`ns (3,702%)             | `151,446`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `400`ns (100%)        | `401`ns (100%)                 | `2,500,000`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `400`ns (100%)        | `401`ns (100%)                 | `2,500,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `401`ns (100%)        | `500`ns (125%)                 | `2,493,766`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `300`ns (100%)        | `301`ns (100%)                 | `3,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `400`ns (133%)        | `500`ns (167%)                 | `2,500,000`/sec       |

<!-- endblock(results) -->
