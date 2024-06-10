--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

-- Started on 2024-06-09 17:49:59

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 24648)
-- Name: admins; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.admins (
    login character varying(20) DEFAULT NULL::character varying NOT NULL,
    password character varying(20) DEFAULT NULL::character varying NOT NULL,
    email character varying(50) DEFAULT NULL::character varying,
    uuid character varying(50) DEFAULT NULL::character varying,
    uid integer NOT NULL
);


ALTER TABLE public.admins OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 24703)
-- Name: admins_uid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.admins_uid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.admins_uid_seq OWNER TO postgres;

--
-- TOC entry 4848 (class 0 OID 0)
-- Dependencies: 221
-- Name: admins_uid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.admins_uid_seq OWNED BY public.admins.uid;


--
-- TOC entry 217 (class 1259 OID 24658)
-- Name: flowers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.flowers (
    name character varying(100) NOT NULL,
    view character varying(100) NOT NULL,
    country character varying(100) NOT NULL,
    season character varying(100) NOT NULL,
    variety character varying(100) NOT NULL,
    price numeric(10,2) NOT NULL,
    provider_id integer NOT NULL,
    vendor_id integer NOT NULL,
    id integer NOT NULL
);


ALTER TABLE public.flowers OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 24710)
-- Name: flowers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.flowers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.flowers_id_seq OWNER TO postgres;

--
-- TOC entry 4849 (class 0 OID 0)
-- Dependencies: 222
-- Name: flowers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.flowers_id_seq OWNED BY public.flowers.id;


--
-- TOC entry 218 (class 1259 OID 24665)
-- Name: providers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.providers (
    name character varying(100) NOT NULL,
    type character varying(100) NOT NULL,
    address character varying(200) NOT NULL,
    id integer NOT NULL
);


ALTER TABLE public.providers OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 24719)
-- Name: providers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.providers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.providers_id_seq OWNER TO postgres;

--
-- TOC entry 4850 (class 0 OID 0)
-- Dependencies: 223
-- Name: providers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.providers_id_seq OWNED BY public.providers.id;


--
-- TOC entry 215 (class 1259 OID 24638)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    login character varying(20) DEFAULT NULL::character varying NOT NULL,
    password character varying(20) DEFAULT NULL::character varying NOT NULL,
    email character varying(50) DEFAULT NULL::character varying,
    uuid character varying(50) DEFAULT NULL::character varying,
    uid integer NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 24696)
-- Name: users_uid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_uid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_uid_seq OWNER TO postgres;

--
-- TOC entry 4851 (class 0 OID 0)
-- Dependencies: 220
-- Name: users_uid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_uid_seq OWNED BY public.users.uid;


--
-- TOC entry 219 (class 1259 OID 24677)
-- Name: vendors; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.vendors (
    name character varying(100) NOT NULL,
    address character varying(200) NOT NULL,
    id integer NOT NULL
);


ALTER TABLE public.vendors OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 24729)
-- Name: vendors_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.vendors_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.vendors_id_seq OWNER TO postgres;

--
-- TOC entry 4852 (class 0 OID 0)
-- Dependencies: 224
-- Name: vendors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.vendors_id_seq OWNED BY public.vendors.id;


--
-- TOC entry 4663 (class 2604 OID 24704)
-- Name: admins uid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admins ALTER COLUMN uid SET DEFAULT nextval('public.admins_uid_seq'::regclass);


--
-- TOC entry 4664 (class 2604 OID 24711)
-- Name: flowers id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.flowers ALTER COLUMN id SET DEFAULT nextval('public.flowers_id_seq'::regclass);


--
-- TOC entry 4665 (class 2604 OID 24720)
-- Name: providers id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.providers ALTER COLUMN id SET DEFAULT nextval('public.providers_id_seq'::regclass);


--
-- TOC entry 4658 (class 2604 OID 24697)
-- Name: users uid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN uid SET DEFAULT nextval('public.users_uid_seq'::regclass);


--
-- TOC entry 4666 (class 2604 OID 24730)
-- Name: vendors id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vendors ALTER COLUMN id SET DEFAULT nextval('public.vendors_id_seq'::regclass);


--
-- TOC entry 4834 (class 0 OID 24648)
-- Dependencies: 216
-- Data for Name: admins; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.admins (login, password, email, uuid, uid) VALUES ('admin', 'qwerty1234@', 'admin@mail.ru', '', 1) ON CONFLICT DO NOTHING;


--
-- TOC entry 4835 (class 0 OID 24658)
-- Dependencies: 217
-- Data for Name: flowers; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.flowers (name, view, country, season, variety, price, provider_id, vendor_id, id) VALUES ('Rose', 'Garden', 'Netherlands', 'Spring', 'Red', 10.50, 1, 1, 1) ON CONFLICT DO NOTHING;
INSERT INTO public.flowers (name, view, country, season, variety, price, provider_id, vendor_id, id) VALUES ('Daisy', 'Garden', 'United States', 'Summer', 'White', 5.99, 2, 2, 2) ON CONFLICT DO NOTHING;
INSERT INTO public.flowers (name, view, country, season, variety, price, provider_id, vendor_id, id) VALUES ('Tulip', 'Garden', 'Netherlands', 'Spring', 'Yellow', 8.75, 1, 3, 3) ON CONFLICT DO NOTHING;
INSERT INTO public.flowers (name, view, country, season, variety, price, provider_id, vendor_id, id) VALUES ('Lilac', 'Garden', 'France', 'Spring', 'Purple', 12.99, 3, 4, 4) ON CONFLICT DO NOTHING;
INSERT INTO public.flowers (name, view, country, season, variety, price, provider_id, vendor_id, id) VALUES ('Sunflower', 'Garden', 'United States', 'Summer', 'Yellow', 7.25, 2, 5, 5) ON CONFLICT DO NOTHING;
INSERT INTO public.flowers (name, view, country, season, variety, price, provider_id, vendor_id, id) VALUES ('Orchid', 'Indoor', 'Thailand', 'Winter', 'Pink', 20.00, 1, 1, 6) ON CONFLICT DO NOTHING;
INSERT INTO public.flowers (name, view, country, season, variety, price, provider_id, vendor_id, id) VALUES ('Lily', 'Garden', 'United States', 'Summer', 'White', 15.50, 3, 2, 7) ON CONFLICT DO NOTHING;
INSERT INTO public.flowers (name, view, country, season, variety, price, provider_id, vendor_id, id) VALUES ('Carnation', 'Garden', 'Colombia', 'Spring', 'Red', 9.75, 2, 3, 8) ON CONFLICT DO NOTHING;
INSERT INTO public.flowers (name, view, country, season, variety, price, provider_id, vendor_id, id) VALUES ('Iris', 'Garden', 'Netherlands', 'Spring', 'Purple', 11.99, 1, 4, 9) ON CONFLICT DO NOTHING;
INSERT INTO public.flowers (name, view, country, season, variety, price, provider_id, vendor_id, id) VALUES ('Chrysanthemum', 'Garden', 'Japan', 'Fall', 'Yellow', 13.25, 3, 5, 10) ON CONFLICT DO NOTHING;
INSERT INTO public.flowers (name, view, country, season, variety, price, provider_id, vendor_id, id) VALUES ('Peony', 'Garden', 'China', 'Spring', 'Pink', 18.50, 2, 1, 11) ON CONFLICT DO NOTHING;
INSERT INTO public.flowers (name, view, country, season, variety, price, provider_id, vendor_id, id) VALUES ('Lavender', 'Garden', 'France', 'Summer', 'Purple', 6.75, 1, 2, 12) ON CONFLICT DO NOTHING;
INSERT INTO public.flowers (name, view, country, season, variety, price, provider_id, vendor_id, id) VALUES ('Hibiscus', 'Indoor', 'Hawaii', 'Summer', 'Red', 14.99, 3, 3, 13) ON CONFLICT DO NOTHING;
INSERT INTO public.flowers (name, view, country, season, variety, price, provider_id, vendor_id, id) VALUES ('Gerbera Daisy', 'Garden', 'South Africa', 'Spring', 'Orange', 10.25, 2, 4, 14) ON CONFLICT DO NOTHING;
INSERT INTO public.flowers (name, view, country, season, variety, price, provider_id, vendor_id, id) VALUES ('Hydrangea', 'Garden', 'Japan', 'Summer', 'Blue', 16.75, 1, 5, 15) ON CONFLICT DO NOTHING;
INSERT INTO public.flowers (name, view, country, season, variety, price, provider_id, vendor_id, id) VALUES ('Poppy', 'Garden', 'Netherlands', 'Spring', 'Red', 8.50, 3, 1, 16) ON CONFLICT DO NOTHING;
INSERT INTO public.flowers (name, view, country, season, variety, price, provider_id, vendor_id, id) VALUES ('Gladiolus', 'Garden', 'Colombia', 'Summer', 'Mixed', 12.99, 2, 2, 17) ON CONFLICT DO NOTHING;
INSERT INTO public.flowers (name, view, country, season, variety, price, provider_id, vendor_id, id) VALUES ('Zinnia', 'Garden', 'United States', 'Summer', 'Rainbow', 7.75, 1, 3, 18) ON CONFLICT DO NOTHING;
INSERT INTO public.flowers (name, view, country, season, variety, price, provider_id, vendor_id, id) VALUES ('Bird of Paradise', 'Indoor', 'South Africa', 'Summer', 'Orange', 22.00, 3, 4, 19) ON CONFLICT DO NOTHING;
INSERT INTO public.flowers (name, view, country, season, variety, price, provider_id, vendor_id, id) VALUES ('Anthurium', 'Indoor', 'Colombia', 'Winter', 'Red', 18.25, 2, 5, 20) ON CONFLICT DO NOTHING;


--
-- TOC entry 4836 (class 0 OID 24665)
-- Dependencies: 218
-- Data for Name: providers; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.providers (name, type, address, id) VALUES ('Acme Flower Supplier', 'Wholesale', '123 Main St, Anytown USA', 1) ON CONFLICT DO NOTHING;
INSERT INTO public.providers (name, type, address, id) VALUES ('Bloom Bouquets', 'Retail', '456 Oak Rd, Someplace CA', 2) ON CONFLICT DO NOTHING;
INSERT INTO public.providers (name, type, address, id) VALUES ('Petal Perfect', 'Wholesale', '789 Elm St, Elsewhere NY', 3) ON CONFLICT DO NOTHING;


--
-- TOC entry 4833 (class 0 OID 24638)
-- Dependencies: 215
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.users (login, password, email, uuid, uid) VALUES ('user', '1234', 'user@mail.ru', '', 1) ON CONFLICT DO NOTHING;


--
-- TOC entry 4837 (class 0 OID 24677)
-- Dependencies: 219
-- Data for Name: vendors; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.vendors (name, address, id) VALUES ('Flower Emporium', '123 Daisy Ln, Bloomington IL', 1) ON CONFLICT DO NOTHING;
INSERT INTO public.vendors (name, address, id) VALUES ('Petal Palace', '456 Rose Blvd, Sunnydale CA', 2) ON CONFLICT DO NOTHING;
INSERT INTO public.vendors (name, address, id) VALUES ('Blossom Boutique', '789 Tulip St, Flowertown OR', 3) ON CONFLICT DO NOTHING;
INSERT INTO public.vendors (name, address, id) VALUES ('Verdant Visions', '321 Lilac Ave, Greenfield MA', 4) ON CONFLICT DO NOTHING;
INSERT INTO public.vendors (name, address, id) VALUES ('Pollen Perfect', '654 Iris Rd, Meadowbrook PA', 5) ON CONFLICT DO NOTHING;


--
-- TOC entry 4853 (class 0 OID 0)
-- Dependencies: 221
-- Name: admins_uid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.admins_uid_seq', 1, true);


--
-- TOC entry 4854 (class 0 OID 0)
-- Dependencies: 222
-- Name: flowers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.flowers_id_seq', 20, true);


--
-- TOC entry 4855 (class 0 OID 0)
-- Dependencies: 223
-- Name: providers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.providers_id_seq', 3, true);


--
-- TOC entry 4856 (class 0 OID 0)
-- Dependencies: 220
-- Name: users_uid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_uid_seq', 1, true);


--
-- TOC entry 4857 (class 0 OID 0)
-- Dependencies: 224
-- Name: vendors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.vendors_id_seq', 5, true);


--
-- TOC entry 4672 (class 2606 OID 24709)
-- Name: admins admins_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admins
    ADD CONSTRAINT admins_pkey PRIMARY KEY (uid);


--
-- TOC entry 4674 (class 2606 OID 24751)
-- Name: admins admins_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admins
    ADD CONSTRAINT admins_unique UNIQUE (login, email);


--
-- TOC entry 4679 (class 2606 OID 24728)
-- Name: flowers flowers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.flowers
    ADD CONSTRAINT flowers_pkey PRIMARY KEY (id);


--
-- TOC entry 4681 (class 2606 OID 24726)
-- Name: providers providers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.providers
    ADD CONSTRAINT providers_pkey PRIMARY KEY (id);


--
-- TOC entry 4683 (class 2606 OID 24671)
-- Name: providers unique_name; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.providers
    ADD CONSTRAINT unique_name UNIQUE (name);


--
-- TOC entry 4685 (class 2606 OID 24683)
-- Name: vendors unique_vendor_name; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vendors
    ADD CONSTRAINT unique_vendor_name UNIQUE (name);


--
-- TOC entry 4668 (class 2606 OID 24749)
-- Name: users user_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT user_unique UNIQUE (login, email);


--
-- TOC entry 4670 (class 2606 OID 24702)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (uid);


--
-- TOC entry 4687 (class 2606 OID 24736)
-- Name: vendors vendors_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vendors
    ADD CONSTRAINT vendors_pkey PRIMARY KEY (id);


--
-- TOC entry 4675 (class 1259 OID 24742)
-- Name: fki_fk_provider_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_fk_provider_id ON public.flowers USING btree (provider_id);


--
-- TOC entry 4676 (class 1259 OID 24695)
-- Name: fki_fk_vendor_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_fk_vendor_id ON public.flowers USING btree (vendor_id);


--
-- TOC entry 4677 (class 1259 OID 24689)
-- Name: fki_p; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_p ON public.flowers USING btree (provider_id);


--
-- TOC entry 4688 (class 2606 OID 24737)
-- Name: flowers fk_provider_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.flowers
    ADD CONSTRAINT fk_provider_id FOREIGN KEY (provider_id) REFERENCES public.providers(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;


--
-- TOC entry 4689 (class 2606 OID 24743)
-- Name: flowers fk_vendor_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.flowers
    ADD CONSTRAINT fk_vendor_id FOREIGN KEY (vendor_id) REFERENCES public.vendors(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;


-- Completed on 2024-06-09 17:49:59

--
-- PostgreSQL database dump complete
--

